import React from "react"
import { Flex, Button, Slide, Box, useDisclosure } from "@chakra-ui/react"

function SlideMenu() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Menu</Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 1200 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="#1F7A8C"
          rounded="md"
          shadow="md"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam
          exercitationem porro accusamus tenetur esse tempore! Rerum, molestias
          voluptates. Iusto, unde voluptatum voluptas libero natus provident ex?
          Provident voluptatibus rerum eligendi maxime, velit dignissimos soluta
          temporibus sit deleniti earum veritatis consequatur porro quo
          voluptates facere asperiores pariatur dicta adipisci odio unde vero
          nostrum nesciunt? Modi suscipit, provident consectetur sapiente atque
          sint ut veniam ex harum commodi nam iusto mollitia.
        </Box>
      </Slide>
    </>
  )
}

const Header = () => (
  <Flex pos="fixed" w="100%" p="4" borderTop="6px solid #1F7A8C">
    {/* <SlideMenu /> */}
  </Flex>
)

export default Header
