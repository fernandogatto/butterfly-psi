import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { useBreakpointValue } from '@chakra-ui/react';

type SidebarContextData = {
  navSize: string;
  changeNavSize: (size: string) => void;
}

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarContext = createContext({} as SidebarContextData)

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [navSize, setNavSize] = useState('large')

  // const isWideVersion = useBreakpointValue({
  //   base: false,
  //   lg: true,
  // })

  // useEffect(() => {
  //   if (isWideVersion) {
  //     setNavSize('small');
  //   }
  // }, [isWideVersion])

  function changeNavSize(size: string) {
    setNavSize(size);
  }

  return (
    <SidebarContext.Provider value={{
      navSize,
      changeNavSize,
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)
