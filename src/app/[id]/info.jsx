import { Box, Flex, Text } from '@chakra-ui/react';
import { FaInfoCircle } from 'react-icons/fa';

const Info = ({ content }) => {
  return (
    <Flex direction="column" mt="36px">
      <Box px="16px">
        <Flex align="center">
          <FaInfoCircle color="#e62c2c" size={22} />
          <Text fontSize={20} fontWeight={600} color="#070707" mt="2px" ml="8px" textTransform="uppercase">
            Thông tin sản phẩm
          </Text>
        </Flex>
        <Box
          className="html-product-content"
          mt="8px"
          dangerouslySetInnerHTML={{ __html: content }}
          lineHeight="25px"
          fontSize={18}
          color="#070707"
        />
      </Box>
    </Flex>
  );
};

export default Info;
