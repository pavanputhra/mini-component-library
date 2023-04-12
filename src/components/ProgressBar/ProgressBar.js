/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const ProgressBar = ({ value, size }) => {
  return <Wrapper role="progressbar" aria-valuenow={value} size={size} >
    <Bar value={value}></Bar>
  </Wrapper>;
};

const Wrapper = styled.div`
  width: 370px;
  border-radius: 4px;
  height: ${props => PROGRESS_SIZES[props.size]};
  background-color: ${COLORS.transparentGray15};
  padding: ${props => props.size === 'large'? '4px' : '0px'};
`;

const Bar = styled.div`
  width: ${props => props.value}%;
  background-color: ${COLORS.primary};
  height: 100%;
  border-radius: ${props => Math.round(props.value) === 100 ? '4px' : '4px 0 0 4px'};
`;

const PROGRESS_SIZES = {
  'large': '24px',
  'medium': '12px',
  'small': '8px',
}

export default ProgressBar;
