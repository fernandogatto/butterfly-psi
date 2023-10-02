import { Button, Checkbox, Divider, Heading, Menu, MenuButton, MenuList, Stack } from "@chakra-ui/react";
import { FunnelIcon } from "@heroicons/react/24/outline";

export default function FilterMenu() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="outline"
        size="md"
        fontSize="md"
        colorScheme="blue"
        leftIcon={<FunnelIcon height={16} />}
      >
        Filtrar
      </MenuButton>

      <MenuList p={3}>
        <Heading as='h3' size='md' mb={3}>
          Filtros
        </Heading>

        <Divider mb={3} />

        <Heading as='h4' size='sm' mb={3}>
          Status
        </Heading>

        <Stack spacing={3} direction='column'>
          <Checkbox colorScheme='blue'>
            Ativo
          </Checkbox>
          <Checkbox colorScheme='blue'>
            Inativo
          </Checkbox>
        </Stack>
      </MenuList>
    </Menu>
  )
}
