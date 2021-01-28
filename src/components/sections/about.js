import React from "react"
import {
  Box,
  Flex,
  Text,
  List,
  ListItem,
  ListIcon,
  Heading,
  Link,
} from "@chakra-ui/react"
import { BiShapeCircle } from "@react-icons/all-files/bi/BiShapeCircle"

function AboutSection() {
  return (
    <Flex p={10} bg="gray.500">
      <Box w={{ base: `100%`, md: `75%` }} m="auto">
        <Heading>Who Am I?</Heading>
        <Text textAlign="justify">
          I'm a<em> self-taught</em> web developer living in
          <strong> Las Vegas</strong>. I create websites and apps that are
          thoughtfully designed and built with performance and accessability in
          mind. My approach to learning is influenced by the nature of
          progression in skateboarding.
        </Text>
        <Box mt="10" p="4" bg="gray.900" borderRadius="lg" textAlign="center">
          <Text as="figure" m="0 auto">
            <Link href="https://www.youtube.com/embed/EQLInlnfWUc" isExternal>
              "You have to accept trial and error...so many failures, it's
              astonishing."
            </Link>
            <figcaption>
              &mdash; Werner Herzog, <cite>on skateboarding</cite>{" "}
            </figcaption>
          </Text>
        </Box>
        <List spacing={2} mt="10">
          <Heading fontSize="lg">Goals for 2021:</Heading>
          <ListItem>
            <ListIcon as={BiShapeCircle} color="yellow.500" />
            Transitioning my passionate hobby into a focused career
          </ListItem>
          <ListItem>
            <ListIcon as={BiShapeCircle} color="yellow.500" />
            Reclaim time lost in 2020 not skateboarding due to COVID-19
          </ListItem>
          <ListItem>
            <ListIcon as={BiShapeCircle} color="yellow.500" />
            Get involved in more community projects by contributing time to
            making more DIY spots
          </ListItem>
        </List>
      </Box>
    </Flex>
  )
}

export default AboutSection
