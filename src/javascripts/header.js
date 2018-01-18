import React from 'react';

import styles from 'stylesheets/modules/header.scss';
import 'stylesheets/utilities/clearfix.scss';

const Header = React.createClass({
  render () {
    return (
      <div className={`header u-clearfix`}>
        Header
      </div>
    )
  }
})

export default Header
