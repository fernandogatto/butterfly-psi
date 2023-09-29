import { Flex, Icon, Input, InputGroup, InputLeftElement, theme } from "@chakra-ui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";


// Controlled components
// Uncontrolled components

// Imperativa vs Declarativa

interface SearchBoxProps {
  placeholder: string;
}

export function SearchBox({ placeholder }: SearchBoxProps) {
  // const [search, setSearch] = useState('')

  const searchInputRef = useRef<HTMLInputElement>(null)

  // searchInputRef.current.focus() (Imperativo)

  return (
    <InputGroup>
      <InputLeftElement pointerEvents='none'>
        <MagnifyingGlassIcon
          color="gray.300"
          height="16px"
        />
      </InputLeftElement>
      <Input placeholder={placeholder} />
    </InputGroup>
  );
}
