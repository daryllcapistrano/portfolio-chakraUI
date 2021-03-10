import React from "react"
import { HiExternalLink as Icon } from "@react-icons/all-files/hi/HiExternalLink"
import {
  SimpleGrid,
  Box,
  Text,
  Image,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react"

function ProjectSection() {
  const bgColor = useColorModeValue("gray.300", "gray.900")

  const projects = [
    {
      title: "Skate Referee",
      techStack: "ReactJS, ChakraUI",
      description:
        "S.K.A.T.E. game score tracker using React hooks to extract stateful logic from components",
      githubLink: "https://github.com/daryllcapistrano/skate-referee",
      externalLink: "https://daryllcapistrano.github.io/skate-referee/",
    },
    {
      title: "Skate Spot App",
      techStack: "ReactJS, Gatsby, StyledComponents",
      description:
        "A convenient way to log, find and share skate spots. An app for skateboarders",
      githubLink: "https://github.com/daryllcapistrano/skatespot-client",
    },
    {
      title: "Media Portfolio",
      techStack: "ReactJS, Gatsby, StyledComponents, GraphQL",
      description:
        "Keaton Rodgers' minimal web portfolio presenting their photo and video work. A static site using GraphQL to query for data and images",
      githubLink:
        "https://github.com/daryllcapistrano/keaton-portfolio-gatsby-v2",
    },
    {
      title: "ColorBlind Compatible Color Palettes",
      techStack: "ReactJS, ChakraUI",
      description:
        "A tool to quickly visualize colorblind-friendly color palettes",
      githubLink: "https://github.com/daryllcapistrano/Game-of-SKATE",
    },
  ]

  return (
    <Box id="projects" minH="100vh" py="10" bg={bgColor}>
      <Box px="4" w={{ base: `100%`, md: `75%` }} m="0 auto">
        <Heading borderBottom="1px" fontWeight="black">
          Projects
        </Heading>
        <SimpleGrid
          columns={[1, 2]}
          justifyItems="center"
          gap="10"
          m="0 auto"
          mt="10"
        >
          {projects.map((project, index) => (
            <Box key={index} maxW="400px">
              <Link href={project.githubLink}>
                <Image
                  src="https://picsum.photos/seed/picsum/400/200.webp"
                  borderRadius="md"
                  boxShadow="base"
                />
              </Link>
              <Box mt="2" px="1">
                <Heading fontSize="lg" color="blue.500">
                  {project.title}
                </Heading>
                <Text fontSize="sm">{project.description}</Text>
                <Link
                  href={project.githubLink}
                  isExternal
                  display="inline-flex"
                  alignItems="center"
                  mt="2"
                >
                  GitHub
                  <Icon />
                </Link>

                <Link
                  href={project.externalLink}
                  isExternal
                  display="inline-flex"
                  alignItems="center"
                  mt="2"
                >
                  Check it out
                  <Icon />
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default ProjectSection
