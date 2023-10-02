import { Button, Stack } from "@chakra-ui/react";

import NextLink from "next/link";

import { PlusIcon } from "@heroicons/react/24/outline";

import SearchInput from "./SearchInput";
import FilterMenu from "./FilterMenu";

export default function Searchbox() {
  return (
    <Stack
      mb="8"
      direction="row"
      justify="space-between"
      align="center"
      spacing="3"
    >
      <SearchInput placeholder="Buscar por nome" />

      <FilterMenu />

      <NextLink href="/pacients/create" passHref>
        <Button
          as="a"
          size="md"
          fontSize="md"
          colorScheme="blue"
          leftIcon={<PlusIcon height={16} />}
        >
          Criar novo
        </Button>
      </NextLink>
    </Stack>
  )
}
