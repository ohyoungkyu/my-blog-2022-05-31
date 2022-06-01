import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function AboutPage() {
  return (
    <Layout pageTitle="About Me">
      <h1>자기소개 페이지 입니다.</h1>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/산과노을-C-Blue Sky.png"
      />
    </Layout>
  );
}

export default AboutPage;
