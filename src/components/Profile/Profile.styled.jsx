import styled from 'styled-components';
import { cunsomFont } from '../../utils';
import { media, colors, adaptFonts, other } from '../../constants';

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  width: 100%;

  border: ${other.border};
  overflow: hidden;
  border-radius: ${other.borderRadius}px;
  background-color: ${colors.white};
  box-shadow: ${other.boxShadow};

  @media screen and (min-width: ${media.mobile}) { {
    width: ${other.defBoxSize.tabl}px;
  }

  @media screen and (min-width: ${media.tablet}) {
    width: ${other.defBoxSize.desk}px;
  }
`;

export const ProfileUpperBox = styled.div`
  width: 100%;
  padding: 40px 20px;
`;

export const Image = styled.img.attrs(props => ({
  src: props.avatar,
  alt: 'User avatar',
}))`
  width: 100%;
  height: auto;

  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-top: 20px;

  color: ${colors.txtBlack};
  text-align: center;
  ${adaptFonts.lg}
  color: ${colors.txtBlack}
`;

export const Tag = styled.p`
  margin-top: 15px;

  text-align: center;
  ${adaptFonts.md}
  color: ${colors.txtGrey};
`;

export const Location = styled.p`
  margin-top: 15px;

  font-size: 20px;
  text-align: center;
  ${adaptFonts.md}
  color: ${colors.txtGrey};
`;

export const StatsList = styled.ul`
  display: flex;
  width: 100%;

  @media screen and (min-width: ${media.mobile}) {
    font-size: 25px;
  }

  @media screen and (min-width: ${media.tablet}) {
    font-size: 27px;
  }

  @media screen and (min-width: ${media.desktop}) {
    font-size: 30px;
  }
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc(100% / 3);
  padding: 20px 0;

  color: ${colors.txtWhite};
  text-align: center;
  ${cunsomFont(21, 24, 27)}

  background-color: ${colors.accent};
  border: ${other.border};
`;

export const StatsNum = styled.span`
  display: inline-box;

  margin-top: 7px;

  font-weight: 500;
`;
