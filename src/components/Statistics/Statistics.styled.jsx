import styled from 'styled-components';
import { media, colors, adaptFonts, other } from '../../constants';
import { getRandomHexColor, increasingSequence, cunsomFont } from '../../utils';

export const StatisticsBox = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 100%;

  overflow: hidden;
  box-shadow: ${other.boxShadow};
    background-color: ${colors.white};
  border: ${other.border};
  border-radius: ${other.borderRadius}px;

  @media screen and (min-width: ${media.mobile}) { {
    width: ${other.defBoxSize.tabl}px;
  }

  @media screen and (min-width: ${media.tablet}) {
    width: ${other.defBoxSize.desk}px;
  }
`;

export const Title = styled.h2`
  margin-top: 20px;

  color: ${colors.txtBlack};
  text-align: center;
  ${adaptFonts.lg}
`;

export const DocList = styled.ul`
  display: flex;
  margin-top: 30px;
  width: 100%;
`;

export const DocItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-basis: calc(100% / ${({ length }) => length});

  ${adaptFonts.sm}
  color: ${colors.txtWhite};

  height: 70px;

  ${({ length }) =>
    increasingSequence(length)
      .map(
        num =>
          `&:nth-child(${num}) {
              background-color: ${getRandomHexColor()}; 
           }`
      )
      .join(' ')}
`;

export const Num = styled.li`
  margin-top: 5px;

  font-weight: 500;
  ${cunsomFont(21, 24, 27)}
`;
