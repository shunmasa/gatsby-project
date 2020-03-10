import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" />
    <h3>this is menu page</h3>
  </Layout>
)

const ButtonWrapper = styled.button`
  background: blue;
  color: white;
`
export default MenuPage
