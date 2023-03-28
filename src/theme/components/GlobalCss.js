import { Global } from '@emotion/react'

const GlobalCss = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Adobe Garamond Pro';
        src: url('./fonts/AGaramondPro-Regular.woff2') format('woff2'),
            url('./fonts/AGaramondPro-Regular.woff') format('woff'),
            url('./fonts/AGaramondPro-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
          font-family: 'Optima';
          src: url('./fonts/Optima.woff2') format('woff2'),
              url('./fonts/Optima.woff') format('woff'),
              url('./fonts/Optima.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
      }

      @font-face {
          font-family: 'Optima';
          src: url('./fonts/Optima-Italic.woff2') format('woff2'),
              url('./fonts/Optima-Italic.woff') format('woff'),
              url('./fonts/Optima-Italic.ttf') format('truetype');
          font-weight: 100;
          font-style: italic;
          font-display: swap;
      }


      /* spacer */
      p:not(:last-child) {
        margin-bottom: 24px;

        @media(min-width: 1280px) {
          margin-bottom: 30px;
        }
      }

    `}
  />
)

export default GlobalCss