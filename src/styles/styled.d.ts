import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    color: string;
    logoColor: string;
    buttonBackground: string;
    buttonColor: string;
    footerBackground: string;
    footerColor: string;
    fontFamily: string;
    cardBackground: string;
    borderColor: string;
    loaderBorder: string;
    loaderBorderLeft: string;
  }
}
