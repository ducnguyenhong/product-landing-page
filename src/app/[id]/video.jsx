import { PX_ALL } from '@/utils/helper-server';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaVideo } from 'react-icons/fa6';
import BuyNow from './buy-now';

const Video = ({ videoYoutube }) => {
  return (
    <Box px={PX_ALL} mt={{ base: '36px', lg: '48px' }}>
      <Flex align="center">
        <FaVideo color="#e62c2c" size={24} />
        <Text fontSize={22} fontWeight={700} color="#070707" mt="2px" ml="8px" textTransform="uppercase">
          Video sản phẩm thực tế
        </Text>
      </Flex>

      <Box mt="16px" w="full" h={{ base: '320px', md: '400px', lg: '600px' }}>
        <iframe
          width="100%"
          height="100%"
          src={videoYoutube}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Box>

      <BuyNow mt={{ base: '24px', lg: '36px' }} />
    </Box>
  );
};

export default Video;
