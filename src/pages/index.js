import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { HomeHeader, Banner, BannerButton } from "../components/utils"
import img from "../images/bcg/homeBcg.jpeg"
import QuickInfo from "../components/homePageComponent/QuickInfo"
import Gallery from "../components/homePageComponent/Gallery"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="55 main street. Santa Monica,CA">
        <Link to="/menu/" style={{ textDecoration: "none" }}>
          <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
