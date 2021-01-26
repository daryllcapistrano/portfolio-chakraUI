/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"
import { ChakraProvider, CSSReset, theme } from "@chakra-ui/react"
// import customTheme from "./src/theme/theme"

export const wrapRootElement = ({ element }) => {
  return (
    // <ChakraProvider theme={customTheme}>
    <ChakraProvider theme={theme}>
      <CSSReset />
      {element}
    </ChakraProvider>
  )
}
