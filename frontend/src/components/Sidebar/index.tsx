import React, { useState } from 'react'

import { Flex } from '@chakra-ui/react'

import { useSidebar } from '@/contexts/SidebarContext'

import UserAvatar from './UserAvatar'
import SidebarNav from './SidebarNav'

export default function Sidebar() {
  const { navSize } = useSidebar();

  return (
    <Flex
      pos="sticky"
      h="100vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      bg="white"
      w={navSize === "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
      textAlign={navSize === "small" ? "center" : "left"}
    >
      <SidebarNav />

      <UserAvatar />
    </Flex>
  )
}
