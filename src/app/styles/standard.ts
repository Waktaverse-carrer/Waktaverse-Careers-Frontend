'use client';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ColorType, SaturationType } from '../lib/types/colors';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    // [COLOURS] Main Palette
    --color-main-50: #EDF8F2;
    --color-main-100: #DAF1E5;
    --color-main-200: #B5E3CC;
    --color-main-300: #90D5B2;
    --color-main-400: #6CC699;
    --color-main-500: #47B880;
    --color-main-600: #399366;
    --color-main-700: #2A6F4D;
    --color-main-800: #1C4A33;
    --color-main-900: #0E251A;
    --color-main-950: #07120D;
    --color-main-gradient: linear-gradient(115deg, #BCE9BC 16.08%, #32B9A2 83.92%);

    // [COLOURS] Grey Palette
    --color-grey-50: #F2F2F7;
    --color-grey-100: #E5E5EA;
    --color-grey-200: #D1D1D6;
    --color-grey-300: #C7C7CC;
    --color-grey-400: #AEAEB2;
    --color-grey-500: #8E8E93;
    --color-grey-600: #636366;
    --color-grey-700: #48484A;
    --color-grey-800: #3A3A3C;
    --color-grey-900: #2C2C2E;
    --color-grey-950: #1C1C1E;

    // [COLOURS] Semantic Red Palette
    --color-red-50: #FFE7E5;
    --color-red-100: #FFCFCC;
    --color-red-200: #FF9E99;
    --color-red-300: #FF6E66;
    --color-red-400: #FF3E33;
    --color-red-500: #FF0E00;
    --color-red-600: #CC0B00;
    --color-red-700: #990800;
    --color-red-800: #660500;
    --color-red-900: #330300;
    --color-red-950: #1A0100;

    // [COLOURS] Semantic Orange Palette
    --color-orange-50: #FFF4E5;
    --color-orange-100: #FFEACC;
    --color-orange-200: #FFD599;
    --color-orange-300: #FFBF66;
    --color-orange-400: #FFAA33;
    --color-orange-500: #FF9500;
    --color-orange-600: #CC7700;
    --color-orange-700: #995900;
    --color-orange-800: #663C00;
    --color-orange-900: #331E00;
    --color-orange-950: #1A0F00;

    // [COLOURS] Semantic Green Palette
    --color-green-50: #EBFAEF;
    --color-green-100: #D7F4DE;
    --color-green-200: #AEEABD;
    --color-green-300: #86DF9C;
    --color-green-400: #5DD57B;
    --color-green-500: #35CA5A;
    --color-green-600: #2AA248;
    --color-green-700: #207936;
    --color-green-800: #155124;
    --color-green-900: #0B2812;
    --color-green-950: #051409;

    // [COLOURS] Semantic Blue Palette
    --color-blue-50: #E5F2FF;
    --color-blue-100: #CCE4FF;
    --color-blue-200: #99CAFF;
    --color-blue-300: #66AFFF;
    --color-blue-400: #3395FF;
    --color-blue-500: #007AFF;
    --color-blue-600: #0062CC;
    --color-blue-700: #004999;
    --color-blue-800: #003166;
    --color-blue-900: #001833;
    --color-blue-950: #000C1A;

    // [COLOURS] ISEGYE IDOL Palette
    --color-isedol-ine: #8A2BE2;
    --color-isedol-jingburger: #EFA957;
    --color-isedol-lilpa: #000080;
    --color-isedol-jururu: #FF008C;
    --color-isedol-gosegu: #457EC6;
    --color-isedol-viichan: #95C100;
  }
`;

export const standard = {
  color: {
    main: (
      color:
        | 50
        | 100
        | 200
        | 300
        | 400
        | 500
        | 600
        | 700
        | 800
        | 900
        | 950
        | 'gradient'
    ) => `var(--color-main-${color})`,
    grey: (
      color: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
    ) => `var(--color-grey-${color})`,
    red: (
      color: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
    ) => `var(--color-red-${color})`,
    orange: (
      color: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
    ) => `var(--color-orange-${color})`,
    green: (
      color: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
    ) => `var(--color-green-${color})`,
    blue: (
      color: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
    ) => `var(--color-blue-${color})`,
    isedol: (
      member: 'ine' | 'jingburger' | 'lilpa' | 'jururu' | 'gosegu' | 'viichan'
    ) => `var(--color-isedol-${member})`,
  },
};

export const standardColor = {
  color: (color: ColorType, saturation: SaturationType) =>
    `var(--color-${color}-${saturation})`,
};
