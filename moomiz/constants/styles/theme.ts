import { DefaultTheme } from "styled-components";

export const Theme: DefaultTheme = {
    color: {
        text: "#000000",
        point: "#F4C2C2",
        background:"#ffffff"

    },
    devices:{
        mobile: `@media only screen and (max-width: 425px)`,
        tablet: `@media only screen and (max-width: 768px)`,
        desktop: `@media only screen and (max-width: 1440px)`,
      },
    fontSize:{
        buttonSmall: '12px',
        buttonMedium: '14px',
        buttonLarge: '16px',
        body3: '18px',
        body2: '20px',
        body1: '22px',
        Heading5: '26px',
        Heading4: '34px',
        Heading3: '42px',
        Heading2: '50px',
        Heading1: '66px',
    }
}