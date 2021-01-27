import React from "react"
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react"
import { GiStripedSun } from "@react-icons/all-files/gi/GiStripedSun"
import { GiMoonOrbit } from "@react-icons/all-files/gi/GiMoonOrbit"

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(GiMoonOrbit, GiStripedSun)

  return (
    <IconButton
      size="lg"
      fontSize="3xl"
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
