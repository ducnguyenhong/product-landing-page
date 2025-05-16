'use client';

import { formatCurrency, PX_ALL } from '@/utils/helper-server';
import {
  Button,
  CloseButton,
  createListCollection,
  Dialog,
  Flex,
  Input,
  Link,
  Portal,
  Select,
  Text,
  Textarea
} from '@chakra-ui/react';
import axios from 'axios';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const FormSubmit = (props) => {
  const { id, name, price, sizes, shortName } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const dataSizes = createListCollection({
    items: sizes || []
  });

  const onSubmit = (values) => {
    const { phone, address, fullName, size } = values;
    const productSize = sizes ? (size ? size?.[0] : 'Chưa chọn') : 'N/A';

    const data = {
      fullName: fullName?.trim(),
      phone: phone?.trim(),
      address: address?.trim(),
      createdAt: dayjs().format('DD/MM/YYYY - HH:mm'),
      productName: `${shortName} - ${formatCurrency(price)} - ${productSize}`,
      productId: id
    };
    setLoading(true);

    axios
      .post('/api/submit', data)
      .then(() => {
        setLoading(false);
        setOpenDialog(true);
        setIsSuccess(true);
        reset();
      })
      .catch(() => {
        setOpenDialog(true);
        setLoading(false);
        setIsSuccess(false);
      });
  };

  return (
    <Flex
      id="form-submit"
      direction="column"
      mx={PX_ALL}
      mt="24px"
      bgGradient="to-r"
      gradientFrom="#e33131"
      gradientVia="#e51818"
      gradientTo="#ff6464"
      px={{ base: '16px', lg: '96px' }}
      py={{ base: '24px', lg: '48px' }}
      borderRadius={8}
    >
      <Text color="#FFF" fontWeight={500} fontSize={20} textAlign="center" lineHeight="26px" mb="16px">
        Bạn hãy điền thông tin
        <br />
        để mua sản phẩm
      </Text>
      <Flex align="center" justify="center" mb="16px">
        <Flex align="center" bgColor="#1b301b" gap="8px" px="12px" py="6px" borderRadius={6}>
          <Text color="#FFF" fontSize={16} fontWeight={500}>
            {formatCurrency(price)}
          </Text>
          <Text color="#FFF">(+ phí ship)</Text>
        </Flex>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'block', width: '100%' }}>
        <Flex direction="column" w="full" gap="20px">
          <Flex direction="column" gap="6px">
            <Text color="#FFF" fontSize={16} fontWeight={500}>
              Họ và tên
            </Text>
            <Input
              {...register('fullName')}
              color="#0C0C0C"
              h="42px"
              px="12px"
              bgColor="#FFF"
              placeholder="Nhập họ tên"
              borderRadius={6}
              fontSize={16}
              maxLength={100}
              _placeholder={{ color: '#7A7A7A' }}
              _focus={{ outline: 'none' }}
            />
            {!!errors.name && <Text color="red.400">{errors.name.message}</Text>}
          </Flex>

          <Flex direction="column" gap="6px">
            <Text color="#FFF" fontSize={16} fontWeight={500}>
              Số điện thoại
            </Text>
            <Input
              {...register('phone', { required: 'Vui lòng nhập số điện thoại' })}
              color="#0C0C0C"
              h="42px"
              px="12px"
              bgColor="#FFF"
              placeholder="Nhập số điện thoại"
              borderRadius={6}
              fontSize={16}
              maxLength={100}
              _placeholder={{ color: '#7A7A7A' }}
              _focus={{ outline: 'none' }}
            />
          </Flex>

          {!!sizes && (
            <Flex direction="column" gap="6px">
              <Text color="#FFF" fontSize={16} fontWeight={500}>
                Chọn size
              </Text>

              <Controller
                control={control}
                name="size"
                render={({ field }) => (
                  <Select.Root
                    collection={dataSizes}
                    name={field.name}
                    value={field.value}
                    onValueChange={({ value }) => field.onChange(value)}
                    onInteractOutside={() => field.onBlur()}
                  >
                    <Select.HiddenSelect />
                    <Select.Control>
                      <Select.Trigger borderRadius={6} h="42px" px="12px" bgColor="#FFF">
                        <Select.ValueText fontSize={16} placeholder="Chọn size áo" />
                      </Select.Trigger>
                      <Select.IndicatorGroup>
                        <Select.Indicator mr="12px" />
                      </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                      <Select.Positioner>
                        <Select.Content py="4px">
                          {dataSizes.items.map((i) => (
                            <Select.Item item={i} key={i.value} px="12px" py="4px">
                              {i.label}
                              <Select.ItemIndicator />
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Positioner>
                    </Portal>
                  </Select.Root>
                )}
              />
            </Flex>
          )}

          <Flex direction="column" gap="6px">
            <Text color="#FFF" fontSize={16} fontWeight={500}>
              Địa chỉ
            </Text>
            <Textarea
              {...register('address')}
              rows={3}
              color="#0C0C0C"
              px="12px"
              pt="10px"
              bgColor="#FFF"
              placeholder="Nhập địa chỉ chi tiết để nhận hàng"
              borderRadius={6}
              fontSize={16}
              maxLength={100}
              _placeholder={{ color: '#7A7A7A' }}
              _focus={{ outline: 'none' }}
            />
            {!!errors.email && <Text color="red.400">{errors.email.message}</Text>}
          </Flex>

          {!!errors.phone && (
            <Text color="#FFF" fontSize={15}>
              {errors.phone.message}
            </Text>
          )}

          <Button
            type="submit"
            w="full"
            h="50px"
            color="#FFF"
            bgColor="#292929"
            fontSize={17}
            borderRadius={6}
            boxShadow="0px 4px 8px 0px #00235733"
            _hover={{ bgColor: '#484848' }}
            _active={{ bgColor: '#484848' }}
            loading={loading}
          >
            Mua hàng ngay
          </Button>
        </Flex>
      </form>

      <Dialog.Root
        size="xs"
        placement="center"
        lazyMount
        trapFocus={false}
        open={openDialog}
        onOpenChange={(e) => {
          setOpenDialog(e.open);
          if (!e.open) {
            setIsSuccess(false);
          }
        }}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content p="24px">
              <Dialog.Header>
                <Flex align="center" gap="8px">
                  {isSuccess ? <FaCheckCircle color="green" size={22} /> : <FaTimesCircle color="red" size={22} />}
                  <Dialog.Title>Đặt hàng {isSuccess ? 'thành công' : 'thất bại'}!</Dialog.Title>
                </Flex>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
              </Dialog.Header>
              <Dialog.Body>
                {isSuccess ? (
                  <Text fontSize={17} lineHeight="24px" color="#000" mt="24px">
                    Nhân viên tư vấn sẽ liên hệ với bạn theo số điện thoại đã đặt hàng.
                    <br />
                    <br />
                    Hãy để ý điện thoại nhé!
                  </Text>
                ) : (
                  <Text fontSize={17} lineHeight="24px" color="#000" mt="24px">
                    Hệ thống đang gặp trục trặc.
                    <br />
                    <br />
                    Hãy gọi tới số điện thoại{' '}
                    <Link href="tel:0888504540" fontSize={17} color="red">
                      0888.504.540
                    </Link>{' '}
                    để đặt hàng nhé!
                  </Text>
                )}
              </Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Flex>
  );
};

export default FormSubmit;
