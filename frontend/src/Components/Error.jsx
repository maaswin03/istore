import React from 'react'
import {Link} from "react-router-dom";

function ErrorPage() {
  return (
    <div>
        <h1>404</h1>
        <p>Not Found</p>
        <p>go to <Link to="/">Home</Link></p>
    </div>
  )
}

export default ErrorPage
