import React from 'react';
import { jsx, css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const divStyle = css`
  first: 100%;
  position: absolute;
  z-index: 9999;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgba(68, 44, 44, 0.4);
  width: 100%;
`;

const Loading = ({ isOpen = false }) => {
  return (
    isOpen && (
      <div css={divStyle}>
        <ClipLoader
          css={override}
          sizeUnit={'px'}
          size={150}
          color={'#123abc'}
          loading={true}
        />
      </div>
    )
  );
};

export default Loading;
