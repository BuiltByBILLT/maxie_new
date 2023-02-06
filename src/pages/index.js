import React, { Fragment } from "react";
import Layout from "../components/layout";
import HomeBanner from "../components/Home/HomeBanner"
import HomeContent from "../components/Home/HomeContent"
import "./fonts.css";

const IndexPage = () => (
    <Layout>
      <HomeBanner/>
      <HomeContent/>
    </Layout>
);

export default IndexPage;

export const Head = () => (
  <>
    <title>Maxie Paper</title>
    <meta charSet="utf-8" />
    <meta name="author" content="Brandon Guo" />
    <meta name="description" content="" />
    <meta name="keywords" content="Maxie, Maxie Needs, Toilet Paper" />
  </>
);
