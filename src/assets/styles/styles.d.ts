import 'styled-components';

import 'styled-dropdown-component';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      background_700: string;
      background_800: string;

      text: string;
      text_overlay: string;
      overlay: string;
      box_shadow: string;

      caption_400: string;
      caption_600: string;
    };

    font_family: {
      inter: string;
    };

    font_weight: {
      regular: number;
      semi_bold: number;
      bold: number;
      black: number;
    };

    font_size: {
      xsm: string;
      sm: string;
      md: string;
      lg: string;
      xlg: string;
    };
  }
}

declare module 'styled-dropdown-component';
