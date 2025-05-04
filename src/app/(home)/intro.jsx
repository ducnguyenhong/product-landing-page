import { Flex, Text } from '@chakra-ui/react';
import { FaBasketShopping } from 'react-icons/fa6';

const Intro = () => {
  return (
    <Flex
      as="nav"
      h="50px"
      gap="8px"
      bgGradient="to-r"
      gradientFrom="#ff6464"
      gradientTo="#cd1b1b"
      border="none"
      boxShadow="0px 4px 8px 0px #00235733"
      justify="center"
      align="center"
      pos="fixed"
      top={0}
      left={0}
      zIndex={100}
      w="full"
    >
      <FaBasketShopping size={23} color="#FFF" style={{ marginTop: '-4px' }} />
      <Text
        color="#FFF"
        textTransform="uppercase"
        fontWeight={600}
        fontSize={17}
        textAlign="center"
        letterSpacing="0.5px"
      >
        Cửa Hàng Gia Dụng Mới
      </Text>
    </Flex>
  );
};

export default Intro;
