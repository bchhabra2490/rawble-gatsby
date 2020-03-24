import React from "react"
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = () => (
    <Form inline className="header-search d-inline">
        <FormControl type="text" placeholder="Type any raw material" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
    </Form>
)

export default SearchBar
