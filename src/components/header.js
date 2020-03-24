import PropTypes from "prop-types"
import React from "react"
import { Jumbotron, Container} from "react-bootstrap";
import SearchBar from './homeComponents/searchbar';
import './header.scss';


const Header = ({ description, showSearchBar }) => (
  <header>
    <Jumbotron fluid>
      <div className="bg-image"></div>
      <Container className="bg-text">
        <h1>{description}</h1>
        {showSearchBar && <SearchBar />}
      </Container>
    </Jumbotron>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
