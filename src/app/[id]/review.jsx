import { PX_ALL } from '@/utils/helper-server';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { FaCommentDots, FaStar } from 'react-icons/fa';

const Review = ({ reviews, numOfReview }) => {
  return (
    <Flex direction="column" mt={{ base: '36px', lg: '48px' }}>
      <Box px={PX_ALL}>
        <Flex align="center">
          <FaCommentDots color="#e62c2c" size={22} />
          <Text fontSize={22} fontWeight={700} color="#070707" mt="2px" ml="8px" textTransform="uppercase">
            Đánh giá từ khách hàng
          </Text>
        </Flex>
        <Flex mt="8px" align="center" justify="center" gap="12px">
          <Flex align="center" gap="4px">
            <Text fontWeight={600} fontSize={18} mt="1px" color="#070707" letterSpacing="2px">
              5/5
            </Text>
            <FaStar size={20} color="#ffc900" />
          </Flex>
          <Text fontSize={17} color="#828282" mt="3px">
            ({numOfReview} đánh giá)
          </Text>
        </Flex>

        <Flex direction="column" gap="4px">
          {reviews.map((review, index) => {
            const { comment, avatar, fullName } = review;
            return (
              <Flex key={index} mt="16px">
                <Image
                  src={avatar}
                  alt="đánh giá"
                  w="70px"
                  h="70px"
                  borderRadius="full"
                  fit="cover"
                  border="1px solid #e6e6e6"
                />
                <Flex flex={1} direction="column" ml="12px">
                  <Text fontSize={16} fontWeight={600} color="#070707">
                    {fullName}
                  </Text>
                  <Flex align="center" gap="2px" mt="4px">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} color="#ffc900" size={18} />
                    ))}
                  </Flex>
                  <Text mt="8px" fontSize={16} fontWeight={400} color="#333333" lineClamp={3} lineHeight="20px">
                    {comment}
                  </Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Review;
