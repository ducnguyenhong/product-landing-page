import { Box, Flex, Text } from '@chakra-ui/react';

const OutStock = ({ remainingQuantity }) => {
  return (
    <Flex direction="column" mt="36px">
      <Box px="16px" mt="8px">
        <Flex align="center" gap="12px">
          <Text
            bgColor="#fff"
            fontSize={15}
            color="#e41b1b"
            px="12px"
            py="3px"
            borderRadius={100}
            border="1px solid #e41b1b"
            className="animate-zoom"
          >
            Sắp hết hàng!
          </Text>
          <Text fontSize={16}>
            Chỉ còn{' '}
            <Text as="span" fontSize={16} fontWeight={600} color="#e62c2c">
              {remainingQuantity}
            </Text>{' '}
            sản phẩm nữa
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default OutStock;
