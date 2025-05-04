import { PX_ALL } from '@/utils/helper-server';
import { getMetadata } from '@/utils/meta-data';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaFire } from 'react-icons/fa6';
import Intro from './intro';
import ProductList from './product-list';

export const metadata = getMetadata();

const Home = () => {
  return (
    <Box>
      <Intro />
      <Flex pt="74px" px={PX_ALL} align="center" gap="8px">
        <FaFire size={24} color="red" />
        <Text color="#070707" fontSize={18} fontWeight={600}>
          Sản phẩm HOT nhất
        </Text>
      </Flex>
      <ProductList />
    </Box>
  );
};

export default Home;
