'use client';

import { PRODUCT_LIST } from '@/utils/data';
import { formatCurrency, PX_ALL } from '@/utils/helper-server';
import { AspectRatio, Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { LiaShippingFastSolid } from 'react-icons/lia';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

const OtherProduct = ({ id }) => {
  return (
    <Flex direction="column" px={PX_ALL} mt={{ base: '36px', lg: '48px' }}>
      <Text fontSize={19} textAlign="center" fontWeight={500} color="#070707" mb={{ base: '12px', lg: '24px' }}>
        Xem thêm các sản phẩm khác
      </Text>
      <Grid gap={{ base: '16px', lg: '24px' }} templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}>
        {PRODUCT_LIST.filter((i) => i.id !== id).map((item) => {
          const { id, images, name, price, discount, originalPrice } = item;

          return (
            <GridItem
              key={id}
              border="1px solid #e6e6e6"
              borderRadius={8}
              overflow="hidden"
              boxShadow={{ base: 'xs', lg: 'xs' }}
              transitionDuration="250ms"
              _hover={{ boxShadow: 'lg' }}
            >
              <Link href={id} style={{ display: 'block', height: '100%' }}>
                <Flex direction="column" h="full">
                  <AspectRatio ratio={4 / 3}>
                    <Box pos="relative">
                      <Image src={images?.[0]} alt={name} />
                      <Flex
                        align="center"
                        gap="6px"
                        bgColor="#00b300"
                        pos="absolute"
                        top="8px"
                        right="8px"
                        zIndex={10}
                        px="8px"
                        py="4px"
                        borderRadius={6}
                      >
                        <LiaShippingFastSolid size={23} color="#FFF" />
                        <Text fontSize={14} fontWeight={500} color="#FFF" mt="2px">
                          Miễn ship
                        </Text>
                      </Flex>
                    </Box>
                  </AspectRatio>
                  <Flex direction="column" justify="space-between" p="12px">
                    <Flex direction="column" flex={1}>
                      <Text fontSize={18} lineClamp={3} fontWeight={500} lineHeight="22px" color="#070707">
                        {name}
                      </Text>
                      <Flex align="center" gap="2px" mt="8px">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar key={star} color="#ffc900" size={18} />
                        ))}
                      </Flex>
                    </Flex>
                    <Flex direction="column" gap="8px" mt="8px">
                      <Text color="#e62c2c" fontSize={20} fontWeight={600}>
                        {formatCurrency(price)}
                      </Text>
                      <Flex align="center" gap="6px">
                        <Text fontSize={14} fontWeight={400} color="#b3b3b3" textDecor="line-through">
                          {formatCurrency(originalPrice)}
                        </Text>
                        <Text color="#e62c2c" fontSize={16} bgColor="#ffe3e3" borderRadius={4} px="6px" py="1px">
                          -{discount}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default OtherProduct;
