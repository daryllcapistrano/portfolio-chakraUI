import React from "react"
import { Box, Flex, Text, List, ListItem, ListIcon } from "@chakra-ui/react"
import { BiShapeCircle } from "@react-icons/all-files/bi/BiShapeCircle"

function AboutSection() {
  return (
    <Flex p={10} bg="gray.500">
      <Box w={{ base: `100%`, md: `75%` }} m="auto">
        <Text fontSize="xl" textAlign="justify">
          I'm a<em> self-taught</em> web developer living in
          <strong> Las Vegas</strong>. I create websites and apps that are
          thoughtfully designed and built with performance and best practices in
          mind.
        </Text>
        <List spacing={3} mt="10">
          <Text fontSize="xl" fontWeight="bold">
            Goals for 2021:
          </Text>
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
