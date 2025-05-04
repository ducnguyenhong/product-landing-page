import { Flex } from '@chakra-ui/react';
import { FaPhone } from 'react-icons/fa6';

const Contact = () => {
  return (
    <Flex
      align="center"
      justify="center"
      pos="fixed"
      zIndex={100}
      bottom={{ base: '74px', lg: '24px' }}
      right={{ base: '12px', lg: '24px' }}
      bgColor="#00b300"
      w="56px"
      h="56px"
      borderRadius="full"
    >
      <a href="tel:0888504540">
        <FaPhone color="#FFF" size={26} className="animate-sake" />
      </a>
    </Flex>
  );
};

export default Contact;
