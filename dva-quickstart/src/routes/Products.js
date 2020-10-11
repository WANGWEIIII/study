import PropTypes from 'prop-types';
import React from "react";

const Greeting = ({name = 124}) => {

    return (
      <h1>Hello, {this.props.name}</h1>
    );

}
Greeting.propTypes = {
  name: PropTypes.string
};

export default Greeting
