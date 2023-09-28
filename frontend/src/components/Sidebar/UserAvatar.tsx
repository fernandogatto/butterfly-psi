import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";

import { useSidebar } from "@/contexts/SidebarContext";

export default function UserAvatar() {
  const { navSize } = useSidebar();

  return (
    <Flex
      p="5%"
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
      mb={4}
    >
      <Divider display={navSize == "small" ? "none" : "flex"} />
      <Flex mt={4} align="center">
        <Avatar size="sm" src="avatar-1.jpg" />
        <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
          <Text color="gray.800" fontSize="16px" fontWeight="bold">User</Text>
          <Text color="gray.400" fontSize="12px">user@chakra-ui.com</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
