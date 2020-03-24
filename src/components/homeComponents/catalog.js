import React from "react"
import { Link } from "gatsby"


import './catalog.scss';

const CatalogSection = () => (
  <div className="catalog">
      <p>We’ve spent years developing products for nuanced parts of personal care rituals because we believe that when we show up for ourselves in private, we show up as ourselves in public.</p>
      <Link as="button" variant="outline-dark" to="/marketplace">Check our MarketPlace</Link>
  </div>
)

export default CatalogSection
