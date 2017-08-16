// @flow

import React from 'react';
import PropTypes from 'prop-types';
import ReactMedia from 'react-media';

import queries from 'media-queries';

const Media = ({ query, children }) => {
  return (
    <ReactMedia query={`(max-width: ${queries[query]})`}>
      {children}
    </ReactMedia>
  );
};

Media.propTypes = {
  query: PropTypes.oneOf(Object.keys(queries)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Media;