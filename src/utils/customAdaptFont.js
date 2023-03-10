import { media } from '../constants';

export const cunsomFont = (mob, tabl, desk) =>
  `
      @media screen and (min-width: ${media.mobile}) {
        font-size: ${mob}px;
      }
  
      @media screen and (min-width: ${media.tablet}) {
        font-size: ${tabl}px;
      }
  
      @media screen and (min-width: ${media.desktop}) {
        font-size: ${desk}px;
      }
    `;
