import { Button } from '@chakra-ui/react';

import { PowerIcon } from '@heroicons/react/20/solid'

import { useSidebar } from '@/contexts/SidebarContext';

export default function Logout() {
  const { navSize } = useSidebar();

  return (
    <Button
      p="5px 10px"
      variant="ghost"
      leftIcon={<PowerIcon height={16} />}
      justifyContent={navSize === "small" ? "center" : "flex-start"}
      w="100%"
    >
      {navSize === 'large' && (
        'Sair'
      )}
    </Button>
  )
}
