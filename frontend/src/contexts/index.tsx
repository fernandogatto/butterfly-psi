import { ReactNode } from 'react';

import { SidebarProvider } from './SidebarContext';

interface AppProviderProps {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  )
}

export default AppProvider;
