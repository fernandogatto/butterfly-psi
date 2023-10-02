import { ReactNode } from "react"
import { Flex } from "@chakra-ui/react";

interface PrivateContainerProps {
  children: ReactNode;
}

export default function PrivateContainer({ children }: PrivateContainerProps) {
  return (
    <Flex w="100%" height="100vh" overflow="hidden">
      {children}
    </Flex>
  )
}
