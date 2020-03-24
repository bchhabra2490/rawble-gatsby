import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header";

import 'bootstrap/dist/css/bootstrap.min.css';
import CatalogSection from "../components/homeComponents/catalog";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header description={"Marketplace for raw materials."} showSearchBar={true} />
    <CatalogSection />
  </Layout>
)

export default IndexPage
