import { ElementType } from 'react'

import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
} from '@chakra-ui/react'

import { ActiveLink } from './ActiveLink';

interface NavItemProps {
  icon: ElementType;
  title: string;
  href: string;
  navSize: string;
}

export default function NavItem({
  icon,
  title,
  href,
  navSize,
}: NavItemProps) {
  return (
    <Flex
      mt={2}
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <ActiveLink href={href} passHref>
          <Link
            p={3}
            borderRadius={8}
            w="100%"
            display="block"
          >
            <MenuButton w="100%">
              <Flex
                align="center"
                justify={navSize === "small" ? "center" : "flex-start"}
              >
                <Icon as={icon} fontSize="md" color={"gray.700"} />
                <Text
                  ml={3}
                  display={navSize === "small" ? "none" : "flex"}
                >
                  {title}
                </Text>
              </Flex>
            </MenuButton>
          </Link>
        </ActiveLink>
      </Menu>
    </Flex>
  )
}
