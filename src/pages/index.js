import React from "react"
// import { Link } from "gatsby"
// import { Box, Text } from "@chakra-ui/react"
// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import {
  IntroSection,
  AboutSection,
  StackSection,
  ProjectSection,
} from "../components/sections"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <IntroSection />
    <AboutSection />
    <StackSection />
    <ProjectSection />
    {/* <Box>
      <Image />
    </Box>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </>
)

export default IndexPage
