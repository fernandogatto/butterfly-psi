import { Box, Stack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export default function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box mt="6" w="100%">
      <Text
        fontWeight="bold"
        fontSize="small"
        textTransform="uppercase"
        color="gray.400"
      >
        {title}
      </Text>
      <Stack>
        {children}
      </Stack>
    </Box>
  )
}
