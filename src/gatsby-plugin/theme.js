import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  colors: {
    brandColor: "#e61919",
  },
}

const theme = extendTheme({ config })
export default theme
