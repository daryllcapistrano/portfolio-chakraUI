import React from "react"
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react"
import { RiSunFill } from "@react-icons/all-files/ri/RiSunFill"
import { RiMoonClearFill } from "@react-icons/all-files/ri/RiMoonClearFill"

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(RiMoonClearFill, RiSunFill)

  return (
    <IconButton
      size="lg"
      fontSize="3xl"
      isRound="true"
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
