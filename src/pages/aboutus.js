import React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/PageBanner"
import AboutUsContent from "../components/AboutUs/AboutUsContent"


const AboutUsPage = () => (
    <Layout>
      <PageBanner title="About Us" description="Maxie Paper Cares"/>
      <AboutUsContent/>
    </Layout>
)

export default AboutUsPage


export const Head = () => (
  <>
      <title>About Us | Maxie Paper</title>
      <meta charSet="utf-8" />
      <meta name="description" content=""/>
      <meta name="keywords" content="Maxie, Maxie Needs, Toilet Paper"/>
  </>
);

