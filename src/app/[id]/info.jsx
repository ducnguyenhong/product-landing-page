import { PX_ALL } from '@/utils/helper-server';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaInfoCircle } from 'react-icons/fa';
import BuyNow from './buy-now';

const Info = ({ content }) => {
  return (
    <Flex direction="column" mt={{ base: '36px', lg: '48px' }}>
      <Box px={PX_ALL}>
        <Flex align="center">
          <FaInfoCircle color="#e62c2c" size={22} />
          <Text fontSize={20} fontWeight={700} color="#070707" mt="2px" ml="8px" textTransform="uppercase">
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
      <BuyNow mt={{ base: '24px', lg: '36px' }} />
    </Flex>
  );
};

export default Info;
