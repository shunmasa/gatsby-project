import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import menuImg from "../images/bcg/menuBcg.jpeg"
import { PageHeader, Banner } from "../components/utils"
const MenuPage = () => (
  <Layout>
    <SEO title="Menu" />
    <PageHeader img={menuImg}>
      <Banner title="manu" subtitle={`lets dig in `} />
    </PageHeader>
  </Layout>
)

const ButtonWrapper = styled.button`
  background: blue;
  color: white;
`
export default MenuPage
