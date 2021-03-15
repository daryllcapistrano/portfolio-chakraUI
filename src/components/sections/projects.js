import React from "react"
import {
  Button,
  SimpleGrid,
  Box,
  Text,
  Image,
  Heading,
  Link,
  useColorModeValue,
  ButtonGroup,
} from "@chakra-ui/react"

function ProjectSection() {
  const bgColor = useColorModeValue("gray.300", "gray.900")

  const projects = [
    {
      title: "Skate Referee",
      techStack: "ReactJS, ChakraUI",
      description: "S.K.A.T.E. game score tracker using React hooks",
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
        "Portfolio page presenting Keaton Rodgers' photo and video work using GraphQL to query for data and images",
      githubLink:
        "https://github.com/daryllcapistrano/keaton-portfolio-gatsby-v2",
    },
    {
      title: "ColorBlind Compatible Color Palettes",
      techStack: "ReactJS, ChakraUI",
      description:
        "A tool to quickly visualize colorblind-friendly color palettes",
      githubLink:
        "https://github.com/daryllcapistrano/colorblind-palette-generator",
    },
  ]

  return (
    <Box id="projects" minH="100vh" px="8" py="16" bg={bgColor}>
      <Heading fontWeight="black">Projects</Heading>
      <SimpleGrid columns={1} spacing={20}>
        {projects.map((project, index) => (
          <Box key={index}>
            <Image
              src="https://picsum.photos/seed/picsum/400/200.webp"
              boxShadow="base"
            />
            <Heading mt="2">{project.title}</Heading>
            <Text fontSize="lg" mt="2">
              {project.description}
            </Text>
            <Box
              bgColor="rgba(0, 0, 0, 0.2)"
              width="fit-content"
              mt="4"
              px="5"
              py="2"
              borderRadius="md"
            >
              <Text display="block" fontSize="sm">
                {project.techStack}
              </Text>
            </Box>
            <ButtonGroup mt="6" spacing="6" colorScheme="telegram">
              <Link
                href={project.externalLink}
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <Button shadow="base">LIVE PREVIEW</Button>
              </Link>
              <Link
                href={project.githubLink}
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <Button variant="link" height="100%">
                  VIEW CODE
                </Button>
              </Link>
            </ButtonGroup>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default ProjectSection
