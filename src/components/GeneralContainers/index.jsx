import styled from 'styled-components';
import { media, colors } from '../../constants';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding-left: 10px;
  padding-right: 10px;

  max-width: 100%;

  @media screen and (min-width: ${media.mobile}) {
    max-width: 320px;
  }

  @media screen and (min-width: ${media.tablet}) {
    max-width: 760px;

    padding-left: 15px;
    padding-right: 15px;
  }

  @media screen and (min-width: ${media.desktop}) {
    max-width: 1200px;

    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: ${media.tablet}) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media screen and (min-width: ${media.desktop}) {
    padding-top: 90px;
    padding-bottom: 90px;
  }
`;

export const AppBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.generalBackground};
`;
