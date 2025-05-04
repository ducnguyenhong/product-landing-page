import { Flex, Text } from '@chakra-ui/react';

const Discount = ({ discount, name }) => {
  return (
    <Flex
      mx={{ base: 0, lg: '180px' }}
      as="nav"
      h="50px"
      gap="12px"
      bgGradient="to-r"
      gradientFrom="#ff6464"
      gradientTo="#cd1b1b"
      border="none"
      boxShadow="0px 4px 8px 0px #00235733"
      justify="center"
      align="center"
    >
      <Text
        color="#FFF"
        textTransform="uppercase"
        fontWeight={600}
        fontSize={17}
        textAlign="center"
        letterSpacing="0.5px"
      >
        Giảm giá
      </Text>

      <Text color="#FFF" mt="-4px" fontSize={24} fontWeight={800} className="animate-zoom">
        {discount}
      </Text>

      <Text
        color="#FFF"
        textTransform="uppercase"
        fontWeight={600}
        fontSize={17}
        textAlign="center"
        letterSpacing="0.5px"
      >
        {name}
      </Text>
    </Flex>
  );
};

export default Discount;
