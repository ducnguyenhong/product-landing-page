import { PRODUCT_LIST } from '@/utils/data';
import { formatCurrency } from '@/utils/helper-server';
import { AspectRatio, Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { LiaShippingFastSolid } from 'react-icons/lia';

const ProductList = () => {
  return (
    <Grid
      w="full"
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
      px={{ base: '24px', md: '24px', lg: '180px', xl: '220px', '2xl': '280px' }}
      pt={{ base: '24px', lg: '36px' }}
      gap="24px"
      pb={{ base: 0, lg: '36px' }}
    >
      {PRODUCT_LIST.map((item) => {
        const { id, images, name, price, discount, originalPrice } = item;
        return (
          <GridItem
            key={id}
            border="1px solid #e6e6e6"
            borderRadius={8}
            boxShadow={{ base: 'md', lg: 'xs' }}
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
                <Flex direction="column" justify="space-between" p="16px" flex={1}>
                  <Flex direction="column" flex={1}>
                    <Text fontSize={18} fontWeight={600} lineHeight="24px" color="#070707">
                      {name}
                    </Text>
                    <Flex align="center" gap="2px" mt="8px">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} color="#ffc900" size={18} />
                      ))}
                    </Flex>
                  </Flex>
                  <Flex align="flex-end" gap="8px" mt="8px">
                    <Text color="#e62c2c" fontSize={20} fontWeight={600}>
                      {formatCurrency(price)}
                    </Text>
                    <Text fontSize={14} fontWeight={400} color="#b3b3b3" textDecor="line-through">
                      {formatCurrency(originalPrice)}
                    </Text>
                    <Text color="#e62c2c" fontSize={16} bgColor="#ffe3e3" borderRadius={4} px="6px" py="1px">
                      -{discount}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ProductList;
