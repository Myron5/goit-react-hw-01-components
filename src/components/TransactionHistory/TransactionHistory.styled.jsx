import styled from 'styled-components';
import { media, colors, adaptFonts, other } from '../../constants';

export const Table = styled.table`
  width: 100%;

  margin-left: auto;
  margin-right: auto;

 ${adaptFonts.sm};
  text-align: center;
  text-transform:capitalize;

  border: none;
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

export const THead = styled.thead`
  color: ${colors.txtWhite};
  border: none;
  background-color: ${colors.accent};
`;

export const Th = styled.th`
  padding-top: 15px;
  padding-bottom: 15px;

  border-bottom: ${other.border};

  &:not(:first-child):not(:last-child) {
    border-left: ${other.border};
    border-right: ${other.border};
  }
`;

export const Tr = styled.tr`
  &:nth-child(2n) {
    background-color: ${colors.generalBackground};
  }
`;

export const LeftCol = styled.td`
  padding-top: 15px;
  padding-bottom: 15px;
  width: calc(100% / 3);
  text-align: left;

  border: ${other.border};
`;

export const CenterCol = styled.td`
  padding-top: 15px;
  padding-bottom: 15px;
  width: calc(100% / 3);

  text-align: right;

  border: ${other.border};
`;

export const RightCol = styled.td`
  padding-top: 15px;
  padding-bottom: 15px;

  border: ${other.border};
`;

export const SpanLeft = styled.td`
  display: inline-block;
  margin-left: 40px;
`;

export const SpanCenter = styled.td`
  display: inline-block;
  margin-right: 40px;
`;
