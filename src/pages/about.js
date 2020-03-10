import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaBeer } from "react-icons/fa"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>this is about page</h3>
  </Layout>
)

const ButtonWrapper = styled.button`
  background: blue;
  color: white;
`
export default AboutPage
