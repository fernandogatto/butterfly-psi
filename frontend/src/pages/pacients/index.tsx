import NextLink from "next/link";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";

import { EllipsisVerticalIcon, FunnelIcon, PlusIcon } from "@heroicons/react/24/outline";

import PrivateContainer from "@/components/PrivateContainer";
import PrivateBox from "@/components/PrivateBox";
import Sidebar from "@/components/Sidebar";
import Searchbox from "@/components/Searchbox";
import { Pagination } from "@/components/Pagination";

const pacients = [
  {
    id: 1,
    name: 'Antonio Carlos Gomes Ribeiro',
    email: 'acribeiro@gmail.com',
    status: 'ativo',
  },
  {
    id: 2,
    name: 'Beatriz Soares Souza Neves',
    email: 'beatriz.neves@gmail.com',
    status: 'inativo',
  },
  {
    id: 3,
    name: 'Eduardo Pereira',
    email: 'edu.pereira@gmail.com',
    status: 'ativo',
  },
  {
    id: 4,
    name: 'Fernanda Wasaki de Carvalho',
    email: 'fernanda.wasaki@gmail.com',
    status: 'ativo',
  },
  {
    id: 5,
    name: 'Gabriela Lopes Lins',
    email: 'gabillins@gmail.com',
    status: 'inativo',
  },
]

export default function PacientsList() {
  return (
    <PrivateContainer>
      <Sidebar />

      <PrivateBox>
        <Heading
          fontSize={{ base: "24px", md: "28px", lg: "36px" }}
          mb={{ base: "15px", lg: "30px" }}
        >
          Pacientes
        </Heading>

        <Searchbox />

        <TableContainer>
          <Table variant="simple" colorScheme="gray">
            <Thead bg="gray.100">
              <Tr>
                <Th px={["2", "2", "4"]} color="gray.300" width="8">
                  <Checkbox colorScheme="blue" />
                </Th>
                <Th color="gray.500">Nome</Th>
                <Th color="gray.500" width="15">Status</Th>
                <Th color="gray.500">E-mail</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody bg="white">
              {pacients.map(pacient => (
                <Tr key={pacient.id}>
                  <Td px={["2", "2", "4"]}>
                    <Checkbox colorScheme="blue" />
                  </Td>
                  <Td>
                    {pacient.name}
                  </Td>
                  <Td>
                    <Box
                      p="6px 12px"
                      bg={pacient.status === 'ativo' ? 'green.100' : 'red.100'}
                      color={pacient.status === 'ativo' ? 'green.500' : 'red.500'}
                      width="fit-content"
                      borderRadius="8px"
                    >
                      {pacient.status}
                    </Box>
                  </Td>
                  <Td>{pacient.email}</Td>
                  <Td>
                    <Tooltip label="Ver ações">
                      <IconButton
                        aria-label="Ver ações"
                        variant="outline"
                      >
                        <EllipsisVerticalIcon height={16} />
                      </IconButton>
                    </Tooltip>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          <Pagination
            totalCountOfRegisters={10}
            currentPage={1}
            onPageChange={() => {}}
          />
        </TableContainer>
      </PrivateBox>
    </PrivateContainer>
  )
}
