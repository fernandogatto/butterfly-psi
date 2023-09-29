import { Button, Stack, Text, VisuallyHidden } from '@chakra-ui/react'
import { GoogleIcon } from './ProviderIcons'

const providers = [
  { name: 'Google', icon: <GoogleIcon /> },
]

export default function OAuthButtonGroup() {
  return (
    <Stack spacing="4">
      {providers.map(({ name, icon }) => (
        <Button key={name} flexGrow={1} variant="outline">
          <Stack direction={'row'} alignItems={'center'} gap={4}>
            <VisuallyHidden>Continue com {name}</VisuallyHidden>
            {icon}
            <Text color="gray.400">
              Continue com {name}
            </Text>
          </Stack>
        </Button>
      ))}
    </Stack>
  )
}
