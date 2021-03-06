// @flow

import React from 'react';

import GenericIcon from 'components/icons/GenericIcon';

const Edit = props => {
  return (
    <GenericIcon {...props}>
      <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
      <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
    </GenericIcon>
  );
};

export default Edit;
