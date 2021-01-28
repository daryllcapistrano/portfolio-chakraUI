import React from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import Carousel from "../carousel"

function StackSection() {
  return (
    <Box pt="10">
      <Text fontSize="2xl" fontWeight="bold" textAlign="center">
        Main Technologies
      </Text>
      <Carousel />
      <Box>
        <Heading>Main Skills</Heading>
        <Text>
          Those are the skills that I use on a daily basis and I am most
          proficient at: React (including React Hooks) Gatsby Strapi GraphQL
          JavaScript Responsive, cross-browser CSS/HTML PhotoShop CC
        </Text>
        <Heading>Secondary Skills</Heading>
        <Text>
          Those are the skills that I use on a less regular basis but I am still
          proficient at: Node.js (including Express) WordPress jQuery Relational
          (SQL) and non-relational (MongoDB) databases Git JSON Basic UI/UX
          Technical SEO
        </Text>
        <Text>
          Those are the non-technical skills that are arguably as important as
          the technical skills: Fluent English Very good listening skills Proven
          effectiveness in team collaboration (experience working in a team,
          both in University and in the working environment) Following
          leadership principles (most notably by expert on leadership Jocko
          Willink) High emotional intelligence Clear and precise writing style
          Time-management skills Excellent problem-solving abilities and
          resourcefulness Thoroughly completion of all assigned tasks and
          responsibilities Offers constructive suggestions for improvements
        </Text>
      </Box>
    </Box>
  )
}

export default StackSection
