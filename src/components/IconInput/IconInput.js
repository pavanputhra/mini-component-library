import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';



const sizes = {
  small: {
    fontSize: 14,
  },
  large: {
    fontSize: 18,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
      <Wrapper size={sizes[size].fontSize}>
        <Input type="text" placeholder={placeholder} size={sizes[size].fontSize} width={width} />
        <IconStyled id={icon} size={sizes[size].fontSize} />
        <VisuallyHidden>{label}</VisuallyHidden>
      </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  font-size: ${props => props.size + 'px'};
  display: inline-block;
`

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${COLORS.gray300};
  width: ${props => props.width + 'px'};
  padding: 7px 7px 7px 22px;
  font-size: inherit;
  color: ${COLORS.gray700};
  font-weight: 600;
  outline-offset: 5px;
  
  &::placeholder {
    font-size: ${props => props.size + 'px'};
    font-weight: 100;
    color: ${COLORS.gray500};
  }
  
  &:focus {
    border-bottom: 2px solid ${COLORS.black};
  }

  &:hover {
    color: ${COLORS.black};
    border-bottom: 2px solid ${COLORS.black};
  }
`

const IconStyled = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  color: ${COLORS.gray500};
  pointer-events: none;
  
  ${Input}:hover + & {
    color: ${COLORS.black};
  }
`;



export default IconInput;
