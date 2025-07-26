import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

// import { useState } from 'react'
import Home from '../components/Home';
import {Divider, Container, Box} from "@mui/material";
import "../styles/main.css";
import Header from '../components/Header';
import Footer from '../components/Footer';


const IndexPage = () => (
  
<div>
        <Container style={{alignContent: "center"}}>
          <Box style={{backgroundColor: "white", borderRadius: "10px", padding: "20px"}}>
          <Header/>
          <Home />
        <Divider/>
        <Footer/>
          </Box>
        </Container>
        
      
      </div>
  
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
