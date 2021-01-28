import React from "react"
import { Box, Text } from "@chakra-ui/react"
import Carousel from "../carousel"

function StackSection() {
  return (
    <Box pt="10">
      <Text fontSize="2xl" fontWeight="bold" textAlign="center">
        Main Technologies
      </Text>
      <Carousel />
    </Box>
  )
}

export default StackSection
