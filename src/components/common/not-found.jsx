import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <Flex direction="column" w="100%" h="100vh" align="center" justify="center" gap="24px">
      <Text fontSize={18} fontWeight={500}>
        Trang không tồn tại
      </Text>
      <Link href="/" style={{ display: 'block' }}>
        <Text fontSize={18} bgColor="green" color="#FFF" px="14px" py="6px" borderRadius={4}>
          Quay lại trang chủ
        </Text>
      </Link>
    </Flex>
  );
};

export default NotFound;
