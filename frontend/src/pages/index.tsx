import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Divider,
  HStack,
  Link,
} from '@chakra-ui/react'

import OAuthButtonGroup from '@/components/OAuthButtonGroup'

export default function SignIn() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Image src="./logo.png" alt="" w={10} />
          <Heading fontSize={'30'}>Login</Heading>
          <Text color="gray.400" fontSize={'20'}>Entre com sua conta</Text>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Checkbox>Lembrar-me</Checkbox>
              <Link
                href='#'
                color={'blue.400'}
                _hover={{
                  color: 'blue.500',
                }}
              >
                Esqueceu a senha?
              </Link>
            </Stack>
            <Button
              variant='solid'
              colorScheme='blue'
              bgGradient='linear(to-r, blue.400, blue.700)'
            >
              Entrar
            </Button>
          </Stack>

          <HStack justify="space-between">
            <Divider />
            <Text textStyle="sm" whiteSpace="nowrap" color="gray.400">
              ou
            </Text>
            <Divider />
          </HStack>
          <OAuthButtonGroup />
        </Stack>
      </Flex>

      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}