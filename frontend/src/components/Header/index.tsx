import { Flex } from '@chakra-ui/react'

import Logo from '../Sidebar/Logo'
import Searchbox from './Searchbox'
import Profile from './Profile'

export default function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Logo />

            <Searchbox />

            <Flex align="center" ml="auto">
                {/* <NotificationsNav /> */}
                <Profile />
            </Flex>
        </Flex>
    )
}
