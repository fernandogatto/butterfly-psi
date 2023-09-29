import { Flex, IconButton, Tooltip } from '@chakra-ui/react'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { HomeIcon, CalendarIcon, Cog6ToothIcon, UsersIcon } from '@heroicons/react/24/outline'

import { useSidebar } from '@/contexts/SidebarContext'

import Logo from './Logo'
import NavSection from './NavSection'
import NavItem from './NavItem'
import Logout from './Logout'

interface MenuItemProps {
  name: string
  icon: any
  link: string
}

const menuItems: Array<MenuItemProps> = [
  { name: 'Início', icon: HomeIcon, link: '/dashboard' },
  { name: 'Pacientes', icon: UsersIcon, link: '/pacients' },
  { name: 'Agenda', icon: CalendarIcon, link: '/#' },
]

const systemItems: Array<MenuItemProps> = [
  { name: 'Configurações', icon: Cog6ToothIcon, link: '/#' },
]

export default function SidebarNav() {
  const { navSize, changeNavSize } = useSidebar();

  return (
    <Flex
      p="5%"
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
      as="nav"
    >
      <Logo />

      <Tooltip label={navSize === 'small' ? 'Abrir menu' : 'Recolher menu'}>
        <IconButton
          aria-label={navSize === 'small' ? 'Abrir menu' : 'Recolher menu'}
          variant="outline"
          position="absolute"
          top="40px"
          right="-10px"
          bg="white"
          isRound={true}
          size="xs"
          icon={navSize === 'small' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          onClick={() => {
            if (navSize === 'small')
              changeNavSize('large')
            else
              changeNavSize('small')
          }}
        />
      </Tooltip>

      <NavSection title="Menu">
        {menuItems.map(item => (
          <NavItem
            key={item.name}
            navSize={navSize}
            icon={item.icon}
            title={item.name}
            href={item.link}
          />
        ))}
      </NavSection>

      <NavSection title="Sistema">
        {systemItems.map(item => (
          <NavItem
            key={item.name}
            navSize={navSize}
            icon={item.icon}
            title={item.name}
            href={item.link}
          />
        ))}
      </NavSection>

      <Logout />
    </Flex>
  )
}
