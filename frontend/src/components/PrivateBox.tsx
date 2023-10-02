import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface PrivateContainerProps {
  children: ReactNode;
}

export default function PrivateBox({ children }: PrivateContainerProps) {
  return (
    <Box
      flex="1"
      p={{ base: "15px", md: "30px", lg: "60px" }}
      mx="auto"
      overflow="auto"
    >
      {children}
    </Box>
  )
}
