import { THEME } from 'consts';
import styled from 'styled-components';

export const Container = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  font-size: 14px;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  opacity: ${THEME.OPACITY.TEXT.DEFAULT};

  &:hover {
    opacity: ${THEME.OPACITY.TEXT.HOVER};
  }

  &:active {
    opacity: ${THEME.OPACITY.TEXT.ACTIVE};
  }
`;
