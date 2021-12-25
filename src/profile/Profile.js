import React from 'react'
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';


const profile = props => {
    return (
        <div>
            {props.children}
<h1>  {props.name}</h1>
<h2> {props.bio} </h2>

<h3> {props.profession} </h3>
        </div>
    )
}
export default profile
