'use client';

import { formatCurrency } from '@/utils/helper-server';
import { Flex, Text } from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa6';

const Navbar = ({ price, originalPrice }) => {
  const scrollToDiv = () => {
    const element = document.getElementById('form-submit');
    if (element) {
      const offsetTop = element.offsetTop - 20;
      setTimeout(() => {
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <Flex as="nav" pos="fixed" zIndex={100} bottom={0} left={0} w="full" h="60px" boxShadow="lg">
      <Flex flex={1} align="center" justify="center" bgColor="#FFF">
        <Flex align="flex-end" gap="4px">
          <Text color="#e62c2c" fontSize={21} fontWeight={600}>
            {formatCurrency(price)}
          </Text>
          <Text fontSize={14} fontWeight={400} color="#b3b3b3" textDecor="line-through">
            {formatCurrency(originalPrice)}
          </Text>
        </Flex>
      </Flex>
      <Flex flex={1} align="center" justify="center" bgColor="#e62c2c" onClick={scrollToDiv}>
        <Flex align="center" gap="8px" className="animate-zoom-sell">
          <FaCartPlus color="#FFF" size={19} />
          <Text color="#FFF" fontSize={17} fontWeight={400}>
            Mua ngay
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
