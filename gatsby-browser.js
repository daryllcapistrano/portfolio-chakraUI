/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
// import customTheme from "./src/theme/theme"

export const wrapRootElement = ({ element }) => {
  return (
    // <ChakraProvider theme={customTheme}>
    <ChakraProvider>
      <CSSReset />
      {element}
    </ChakraProvider>
  )
}
