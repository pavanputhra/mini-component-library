import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from "../VisuallyHidden";

const Select = ({ label, value, onChange, children }) => {
  // const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <IconStyled id='chevron-down' />
      <SelectStyled value={value} onChange={onChange}>
        {children}
      </SelectStyled>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`

const SelectStyled = styled.select`
  height: 43px;
  width: auto;
  padding: 12px 40px 12px 16px;
  border: none;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  appearance: none;
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconStyled = styled(Icon)`
  margin-top: -1px;
  position: absolute;
  right: 16px;
  bottom: 8px;
  pointer-events: none;
`;

export default Select;
