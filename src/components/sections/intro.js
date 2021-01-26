import React from "react"
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react"
import Avatar from "../../assets/avataaars.svg"
import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher"

function IntroSection() {
  const bg = useColorModeValue("white", "gray.800")

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      w="100%"
      minH="100vh"
      bg={bg}
    >
      <Text m="auto" fontSize="xl">
        Daryll Capistrano Web Developer
      </Text>
      <Flex flexDirection="column" alignSelf="center">
        <Box alignSelf="center">
          <ColorModeSwitcher />
        </Box>
        <Box>
          <Avatar />
        </Box>
      </Flex>
    </Flex>
  )
}

export default IntroSection
