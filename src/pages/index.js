import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  IntroSection,
  AboutSection,
  StackSection,
  ProjectSection,
} from "../components/sections"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection />
    <AboutSection />
    <StackSection />
    <ProjectSection />
  </Layout>
)

export default IndexPage
