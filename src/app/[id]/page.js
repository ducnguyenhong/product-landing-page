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
import Video from './video';
import Script from 'next/script';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = PRODUCT_LIST.find((item) => item.id === id);
  const { name, images, description, discount } = product || {};
  return getMetadata({ title: `${name} - Giảm giá sốc ${discount}`, image: images?.[0], description });
}

const ProductDetail = async ({ params }) => {
  const { id } = await params;
  const product = PRODUCT_LIST.find((item) => item.id === id);

  if (!product) {
    return <NotFound />;
  }

  const {
    name,
    shortName,
    discount,
    price,
    originalPrice,
    images,
    content,
    reviews,
    remainingQuantity,
    quantitySold,
    viewing,
    numOfReview,
    videoYoutube
  } = product;

  return (
    <Flex as="main" direction="column" pos="relative" minH="100vh" bgColor="#FFF">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-EHY6RLHMNZ" strategy='afterInteractive'></Script>
      <Script id="google-analytics" strategy='afterInteractive'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-EHY6RLHMNZ');
        gtag("event", "view_item", {
          currency: "USD",
          value: 30.03,
          items: [
            {
              item_id: "SKU_12345",
              item_name: "Stan and Friends Tee",
              affiliation: "Google Merchandise Store",
              coupon: "SUMMER_FUN",
              discount: 2.22,
              index: 0,
              item_brand: "Google",
              item_category: "Apparel",
              item_category2: "Adult",
              item_category3: "Shirts",
              item_category4: "Crew",
              item_category5: "Short sleeve",
              item_list_id: "related_products",
              item_list_name: "Related Products",
              item_variant: "green",
              location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
              price: 10.01,
              quantity: 3
            }
          ]
        });
        `}
      </Script>
      <Discount discount={discount} name={shortName} />
      <RevealClient>
        <Slider images={images} name={name} />
      </RevealClient>
      <RevealClient>
        <FlashSale discount={discount} />
      </RevealClient>
      <RevealClient>
        <Price
          name={name}
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
      <FormSubmit id={id} name={name} price={price} />
      {!!videoYoutube && (
        <RevealClient>
          <Video videoYoutube={videoYoutube} />
        </RevealClient>
      )}
      <Navbar originalPrice={originalPrice} price={price} />
    </Flex>
  );
};

export default ProductDetail;
