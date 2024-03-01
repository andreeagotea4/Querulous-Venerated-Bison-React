import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Querulous Venerated Bison</title>
        <meta property="og:title" content="Querulous Venerated Bison" />
      </Helmet>
      <h1>Heading</h1>
      <h1>Heading</h1>
    </div>
  )
}

export default Home
