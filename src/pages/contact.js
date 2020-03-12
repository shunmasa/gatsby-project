import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contactImg from "../images/bcg/contactBcg.jpeg"
import { PageHeader, Banner } from "../components/utils"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={contactImg}>
      <Banner title="contact us" subtitle="lets get in touch" />
    </PageHeader>
  </Layout>
)

export default ContactPage
