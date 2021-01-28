import React from "react"
import Slider from "react-slick"
import { Box } from "@chakra-ui/react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import JavaScript from "../../assets/svg/javascript.svg"
import ReactJS from "../../assets/svg/reactjs.svg"
import GatsbyJS from "../../assets/svg/gatsbyjs.svg"
import NodeJS from "../../assets/svg/nodejs.svg"
import Git from "../../assets/svg/git-scm.svg"
import GraphQL from "../../assets/svg/graphql.svg"
import MongoDB from "../../assets/svg/mongodb.svg"

export default function Carousel() {
  const settings = {
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 7,
    infinite: true,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 0.01,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 7,
        },
      },
    ],
  }

  return (
    <Box mt="10">
      <Slider {...settings}>
        <Box>
          <JavaScript />
        </Box>
        <Box>
          <ReactJS />
        </Box>
        <Box>
          <GatsbyJS />
        </Box>
        <Box>
          <NodeJS />
        </Box>
        <Box>
          <Git />
        </Box>
        <Box>
          <GraphQL />
        </Box>
        <Box>
          <MongoDB />
        </Box>
      </Slider>
    </Box>
  )
}
