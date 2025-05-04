'use client';

import { Flex, Text } from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa6';

const BuyNow = ({ mt }) => {
  const scrollToDiv = () => {
    const element = document.getElementById('form-submit');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      setTimeout(() => {
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <Flex
      mt={mt}
      align="center"
      justify="center"
      bgColor="#e62c2c"
      w="200px"
      mx="auto"
      py="14px"
      borderRadius={8}
      cursor="pointer"
      onClick={scrollToDiv}
    >
      <Flex align="center" gap="8px" className="animate-zoom-sell">
        <FaCartPlus color="#FFF" size={19} />
        <Text color="#FFF" fontSize={17} fontWeight={400}>
          Mua ngay
        </Text>
      </Flex>
    </Flex>
  );
};

export default BuyNow;
