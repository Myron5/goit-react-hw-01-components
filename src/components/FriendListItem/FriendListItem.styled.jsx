import styled from 'styled-components';

import { colors, adaptFonts, other } from '../../constants';

export const FriendBox = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;

  padding: 20px;
  width: 100%;

  font-weight: 500;
  color: ${colors.txtBlack}
  ${adaptFonts.md}

  box-shadow: ${other.boxShadow};
  border: ${other.border};
  background-color: ${colors.white};
  border-radius: ${other.borderRadius}px;
`;

export const Image = styled.img.attrs(props => ({
  src: props.avatar,
  alt: 'User avatar',
}))`
  width: 100px;
  height: 100px;

  overflow: hidden;
  border: ${other.border};
  border-radius: ${other.borderRadius}px;
`;

export const IsOnline = styled.span`
  display: inline-block;

  width: ${other.iconSize}px;
  height: ${other.iconSize}px;

  background-color: ${({ isOnline }) =>
    isOnline ? colors.isOnlineGreen : colors.isOnlineRed};
  border-radius: 50%;
`;
