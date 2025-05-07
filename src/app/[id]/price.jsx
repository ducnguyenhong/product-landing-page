'use client';

import { formatCurrency } from '@/utils/helper-server';
import { Flex, Grid, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BiSupport } from 'react-icons/bi';
import { FaRegEye } from 'react-icons/fa';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { TbRefreshAlert } from 'react-icons/tb';
import BuyNow from './buy-now';

const Price = (props) => {
  const { price, originalPrice, quantitySold, discount, viewing, name } = props;

  const viewingList = [viewing, viewing + 3, viewing + 2, viewing + 5, viewing + 7, viewing + 4];
  const [currentViewing, setCurrentViewing] = useState(viewing);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * viewingList.length);
      setCurrentViewing(viewingList[randomIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex direction="column" align="center" mt="16px" mx={{ base: '16px', md: '24px', lg: '180px' }}>
      <Flex w="full" direction="column">
        <Text as="h1" fontSize={20} fontWeight={600} color="#070707" lineHeight="28px" mb="12px">
          {name}
        </Text>
        <Flex align="flex-end" gap="8px">
          <Text color="#e62c2c" fontSize={24} fontWeight={700}>
            {formatCurrency(price)}
          </Text>
          <Text fontSize={16} fontWeight={400} color="#b3b3b3" textDecor="line-through">
            {formatCurrency(originalPrice)}
          </Text>
          <Text color="#e62c2c" fontSize={16} bgColor="#ffe3e3" borderRadius={4} px="6px" py="1px">
            -{discount}
          </Text>
        </Flex>

        <Flex align="center" mt="18px" gap="10px">
          <Flex align="center" gap="6px" justify="flex-end">
            <Text fontSize={15} color="#070707">
              Đã bán{' '}
              <Text as="span" color="#e62c2c" fontSize={16} fontWeight={500}>
                {quantitySold}
              </Text>{' '}
              sản phẩm
            </Text>
          </Flex>
          <Flex w="1px" h="18px" bgColor="#b3b3b3" />
          <Flex align="center" gap="4px" justify="flex-end">
            <FaRegEye color="#e62c2c" size={20} />
            <Text color="#e62c2c" fontSize={16} fontWeight={500}>
              {currentViewing}
            </Text>
            <Text fontSize={15} color="#070707">
              người đang xem
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Grid w="full" mt="24px" templateColumns="repeat(2, 1fr)" gap="1px" mx="16px" bgColor="#e6e6e6">
        <Flex gap="6px" direction="column" align="center" justify="center" py="16px" bgColor="#FFF">
          <LiaShippingFastSolid size={28} color="#00b300" />
          <Text fontSize={14} fontWeight={500} textAlign="center" color="#070707">
            Miễn phí giao hàng
          </Text>
        </Flex>
        <Flex align="center" direction="column" gap="8px" bgColor="#FFF" py="16px">
          <FaRegCircleCheck size={24} color="#00b300" style={{ marginTop: '4px' }} />
          <Text fontSize={14} fontWeight={500} textAlign="center" color="#070707">
            Nhận hàng rồi mới trả tiền
          </Text>
        </Flex>
        <Flex align="center" direction="column" gap="8px" bgColor="#FFF" py="16px">
          <BiSupport size={26} color="#00b300" />
          <Text fontSize={14} fontWeight={500} textAlign="center" color="#070707">
            Tư vấn sản phẩm chi tiết
          </Text>
        </Flex>
        <Flex gap="6px" direction="column" align="center" justify="center" bgColor="#FFF" py="16px">
          <TbRefreshAlert size={28} color="#00b300" />
          <Text fontSize={14} fontWeight={500} textAlign="center" color="#070707">
            Đổi hàng trong 7 ngày
          </Text>
        </Flex>
      </Grid>
      <BuyNow mt={{ base: '24px', lg: '36px' }} />
    </Flex>
  );
};

export default Price;
