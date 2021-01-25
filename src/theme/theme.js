// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
// Version 1: Using objects
const customTheme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "red.900",
        color: "white",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
})

export default customTheme
