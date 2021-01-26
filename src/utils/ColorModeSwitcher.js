import React from "react"
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react"
import { FaLightbulb } from "@react-icons/all-files/fa/FaLightbulb"
import { FaRegLightbulb } from "@react-icons/all-files/fa/FaRegLightbulb"

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaRegLightbulb, FaLightbulb)

  return (
    <IconButton
      size="lg"
      fontSize="4xl"
      isRound="true"
      margin={{ base: "auto", md: "0" }}
      maxW="40px"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  )
}
