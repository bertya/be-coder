import React from 'react'
import Header from 'javascripts/header'
import Footer from 'javascripts/footer'
import HighLighter from 'javascripts/highLighter'
import Editor from 'javascripts/editor'
import ACE from 'javascripts/ace'

import 'stylesheets/modules/container.scss'

const Container = React.createClass({
  render () {
    return (
      <div className='container'>
        <Header />
        <HighLighter />
        <Editor />
        <ACE />
        <Footer />
      </div>
    )
  }
})

export default Container
