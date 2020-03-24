import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header";
import ValuesSection from "../components/contactComponents/valuesSection";
import PartnersSection from "../components/contactComponents/partnersSection";

const SecondPage = () => (
  <Layout>
    <SEO title="About Rawble" />
    <Header description={"About Us"} showSearchBar={false} />
    <ValuesSection />
    <PartnersSection />
  </Layout>
)

export default SecondPage
