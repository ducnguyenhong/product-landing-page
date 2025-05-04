import { PX_ALL } from '@/utils/helper-server';
import { Flex, Image, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as="footer"
      direction="column"
      bgColor="#292929"
      px={PX_ALL}
      py="16px"
      pb={{ base: '80px', lg: '24px' }}
      mt="32px"
    >
      <Text color="#FFF" fontWeight={600} fontSize={20}>
        Gia Dụng Mới
      </Text>
      <Text color="#ccc">Cửa Hàng Đồ Gia Dụng Chất Lượng, Giá Tốt</Text>

      <Flex mt="24px">
        <Text color="#FFF" fontWeight={500} fontSize={16} w="100px">
          Website:
        </Text>
        <Text color="#ccc" fontSize={16}>
          https://giadungmoi.top
        </Text>
      </Flex>

      <Flex mt="8px">
        <Text color="#FFF" fontWeight={500} fontSize={16} w="100px">
          Hotline:
        </Text>
        <Link href="tel:0888504540" color="#ccc" fontSize={16}>
          0888.504.540
        </Link>
      </Flex>

      <Flex mt="8px">
        <Text color="#FFF" fontWeight={500} fontSize={16} w="100px">
          Địa chỉ:
        </Text>
        <Text color="#ccc" fontSize={16}>
          Quận Cầu Giấy, Thành phố Hà Nội
        </Text>
      </Flex>

      <Flex mt="12px">
        <Image src="/images/test.webp" w="120px" h="auto" />
      </Flex>
    </Flex>
  );
};

export default Footer;
