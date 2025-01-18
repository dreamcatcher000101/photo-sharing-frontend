import { THEME } from 'consts';
import styled from 'styled-components';

export const Container = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  opacity: ${THEME.OPACITY.TEXT.DEFAULT};

  &:hover {
    opacity: ${THEME.OPACITY.TEXT.HOVER};
  }

  &:active {
    opacity: ${THEME.OPACITY.TEXT.ACTIVE};
  }
`;

export const LightContainer = styled.button`
  color: ${THEME.COLORS.TEXT.LIGHT};

  background: transparent;
  border: ${THEME.COLORS.TEXT.LIGHT} solid;
  border-width: 0 0 2px 0;
  padding-bottom: 4px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  opacity: ${THEME.OPACITY.TEXT.DEFAULT};

  &:hover {
    opacity: ${THEME.OPACITY.TEXT.HOVER};
  }

  &:active {
    opacity: ${THEME.OPACITY.TEXT.ACTIVE};
  }
`;
