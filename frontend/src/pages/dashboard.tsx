import { Bars3Icon } from '@heroicons/react/24/solid'
import Sidebar from '../components/Sidebar'
import { Flex, Text, IconButton } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex w="100%">
      <Sidebar />
      <Flex
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Text>Click the
          <IconButton
            aria-label=""
            background="none"
            _hover={{ background: 'none' }}
            icon={<Bars3Icon />}
          />
        to resize the vertical navigation bar.</Text>
      </Flex>
    </Flex>
  )
}
