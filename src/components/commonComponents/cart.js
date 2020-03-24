import React from "react"
import { Link } from "gatsby"

const Cart = ({totalItems}) => (
    <Link to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ({totalItems || 0})</Link>
)

export default Cart
