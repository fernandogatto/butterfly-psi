import { Box, Divider, Image, Stack, Text } from '@chakra-ui/react'

import { useSidebar } from '@/contexts/SidebarContext';

export default function Logo() {
  const { navSize } = useSidebar();

    return (
    <Box>
      <Stack
        direction="row"
        align="center"
        justify="center"
        w="100%"
        py="6"
        spacing="3"
      >
        <Image
          src="./logo.png"
          alt="Logo"
          w={10}
        />

        {navSize === 'large' && (
          <Box>
            <Text
              color="gray.800"
              fontWeight="bold"
              fontSize="18"
            >
              Butterfly Psi
            </Text>

            <Text
              color="gray.400"
              fontSize="12"
            >
              Psicologia à distância
            </Text>
          </Box>
        )}
      </Stack>

      <Divider />
    </Box>
  )
}
