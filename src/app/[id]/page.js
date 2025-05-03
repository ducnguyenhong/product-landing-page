import { NotFound, RevealClient } from '@/components/common';
import { PRODUCT_LIST } from '@/utils/data';
import { getMetadata } from '@/utils/meta-data';
import { Flex } from '@chakra-ui/react';
import Discount from './discount';
import FlashSale from './flash-sale';
import FormSubmit from './form-submit';
import Info from './info';
import Navbar from './navbar';
import OutStock from './out-stock';
import Price from './price';
import Review from './review';
import Slider from './slider';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = PRODUCT_LIST.find((item) => item.id === id);
  const { name, images, description } = product || {};
  return getMetadata({ title: name, image: images?.[0], description });
}

const ProductDetail = async ({ params }) => {
  const { id } = await params;
  const product = PRODUCT_LIST.find((item) => item.id === id);

  if (!product) {
    return <NotFound />;
  }

  const {
    name,
    discount,
    price,
    originalPrice,
    images,
    content,
    reviews,
    remainingQuantity,
    quantitySold,
    viewing,
    numOfReview
  } = product;

  return (
    <Flex as="main" direction="column" pos="relative" minH="100vh" bgColor="#FFF">
      <Discount discount={discount} name={name} />
      <RevealClient>
        <Slider images={images} name={name} />
      </RevealClient>
      <RevealClient>
        <FlashSale discount={discount} />
      </RevealClient>
      <RevealClient>
        <Price
          originalPrice={originalPrice}
          price={price}
          discount={discount}
          quantitySold={quantitySold}
          viewing={viewing}
        />
      </RevealClient>
      <RevealClient threshold={0.2}>
        <Info content={content} />
      </RevealClient>
      <RevealClient threshold={0.2}>
        <Review reviews={reviews} numOfReview={numOfReview} />
      </RevealClient>
      <RevealClient>
        <OutStock remainingQuantity={remainingQuantity} />
      </RevealClient>
      <FormSubmit id={id} name={name} />

      <Navbar originalPrice={originalPrice} price={price} />
    </Flex>
  );
};

export default ProductDetail;
