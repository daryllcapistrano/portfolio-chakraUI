import React from "react"
import {
  Flex,
  Button,
  Slide,
  Box,
  useDisclosure,
  Spacer,
  Text,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher"

function SlideMenu() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle} size="sm" mr="4" variant="outline">
        {isOpen === true ? "hide" : "menu"}
      </Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="#1F7A8C"
          rounded="md"
          shadow="md"
        >
          <Button onClick={onToggle} size="sm" mr="4" variant="outline">
            {isOpen === true ? "hide" : "menu"}
          </Button>
          <Text>Menu Item</Text>
          <Text>Menu Item</Text>
          <Text>Menu Item</Text>
          <Text>Menu Item</Text>
          <Text>Menu Item</Text>
          <Text>Menu Item</Text>
          <Text>Menu Item</Text>
        </Box>
      </Slide>
    </>
  )
}

const Header = () => (
  <Flex
    pos="static"
    alignItems="center"
    w="100%"
    px="4"
    py="2"
    borderTop="6px solid #1F7A8C"
    borderBottom="1px solid #1F7A8C"
  >
    <Text fontWeight="bold" fontSize="2xl">
      DC
    </Text>
    <Spacer />
    <SlideMenu />
    <ColorModeSwitcher />
  </Flex>
)

export default Header
