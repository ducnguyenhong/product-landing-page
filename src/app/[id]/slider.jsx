'use client';

import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { LiaShippingFastSolid } from 'react-icons/lia';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = ({ images, name }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Box mx={{ base: 0, lg: '180px' }}>
      <Box h={{ base: '400px', md: '500px', lg: '650px' }} overflow="hidden" pos="relative">
        <Flex
          align="center"
          gap="6px"
          bgColor="#00b300"
          pos="absolute"
          top="8px"
          right="8px"
          zIndex={10}
          px="12px"
          py="6px"
          borderRadius={8}
        >
          <LiaShippingFastSolid size={23} color="#FFF" />
          <Text fontSize={14} fontWeight={500} color="#FFF" mt="2px">
            Miễn phí giao hàng
          </Text>
        </Flex>
        <Swiper
          spaceBetween={10}
          autoplay
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                style={{ border: '1px solid #e6e6e6', objectFit: 'cover', width: '100%' }}
                h={{ base: '400px', md: '500px', lg: '650px' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Box mt="8px" h={{ base: '78px', lg: '120px' }} overflow="hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          onSwiper={setThumbsSwiper}
          className="product-slider-gallery"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              // onClick={() => {
              //   console.log('ducnh 99');
              //   setThumbsSwiper(image);
              // }}
            >
              <Image
                src={image}
                alt={name}
                style={{
                  border: '1px solid #e6e6e6',
                  borderRadius: 2,
                  objectFit: 'cover',
                  width: '100%'
                }}
                h={{ base: '78px', lg: '120px' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Slider;
