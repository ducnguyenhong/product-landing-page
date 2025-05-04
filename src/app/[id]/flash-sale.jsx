'use client';

import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const FlashSale = ({ discount }) => {
  const hours = 0;
  const minutes = 46;
  const seconds = 18;

  const [timeLeft, setTimeLeft] = useState(hours * 3600 + minutes * 60 + seconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (time) => time.toString().padStart(2, '0');

  const hrs = Math.floor(timeLeft / 3600);
  const mins = Math.floor((timeLeft % 3600) / 60);
  const secs = timeLeft % 60;

  return (
    <Flex
      mx={{ base: 0, lg: '180px' }}
      mt="8px"
      h="42px"
      px="16px"
      bgGradient="to-r"
      gradientFrom="#cd1b1b"
      gradientTo="#ff6464"
      align="center"
      justify="space-between"
    >
      <Text color="#FFF" textTransform="uppercase" fontSize={16} fontWeight={500}>
        Giảm giá {discount}
      </Text>
      <Flex align="center" gap="8px">
        <Text color="#FFF" fontSize={15} fontWeight={400}>
          Kết thúc trong
        </Text>
        <Flex align="center" gap="2px">
          <Text
            color="#FFF"
            bgColor="#070707"
            borderRadius={4}
            letterSpacing="0.5px"
            fontSize={16}
            fontWeight={500}
            w="30px"
            h="28px"
            textAlign="center"
            pt="2px"
          >
            {formatTime(hrs)}
          </Text>
          <Text color="#070707">:</Text>
          <Text
            color="#FFF"
            bgColor="#070707"
            borderRadius={4}
            letterSpacing="0.5px"
            fontSize={16}
            fontWeight={500}
            w="30px"
            h="28px"
            textAlign="center"
            pt="2px"
          >
            {formatTime(mins)}
          </Text>
          <Text color="#070707">:</Text>
          <Text
            color="#FFF"
            bgColor="#070707"
            borderRadius={4}
            letterSpacing="0.5px"
            fontSize={16}
            fontWeight={500}
            w="30px"
            h="28px"
            textAlign="center"
            pt="2px"
          >
            {formatTime(secs)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FlashSale;
