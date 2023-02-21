import styled from 'styled-components';
import { media, other } from '../../constants';

export const FriendListBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media screen and (min-width: ${media.mobile}) { {
    width: ${other.defBoxSize.tabl}px;
  }

  @media screen and (min-width: ${media.tablet}) {
    width: ${other.defBoxSize.desk}px;
  }
`;
