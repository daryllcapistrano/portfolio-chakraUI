/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"
import { ChakraProvider, CSSReset, ColorModeScript } from "@chakra-ui/react"
import theme from "./src/gatsby-plugin/theme"
// ! cant seem to get fonts to work
import { Fonts } from "./src/gatsby-plugin/fonts"

export const wrapRootElement = ({ element }) => {
  return (
    // <ChakraProvider theme={customTheme}>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CSSReset />
      <Fonts />
      {element}
    </ChakraProvider>
  )
}
