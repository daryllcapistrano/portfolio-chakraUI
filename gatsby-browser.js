/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"
import { ChakraProvider, CSSReset, ColorModeScript } from "@chakra-ui/react"
import theme from "./src/theme/theme"

export const wrapRootElement = ({ element }) => {
  return (
    // <ChakraProvider theme={customTheme}>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CSSReset />
      {element}
    </ChakraProvider>
  )
}
