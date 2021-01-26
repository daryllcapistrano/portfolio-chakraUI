import React from "react"
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react"
import { FaMoon } from "@react-icons/all-files/fa/FaMoon"
import { FaSun } from "@react-icons/all-files/fa/FaSun"

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <IconButton
      size="lg"
      fontSize="lg"
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
