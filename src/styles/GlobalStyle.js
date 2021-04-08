import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  --green: rgb(24, 236, 151);
  --blue: #121136;
  --pink: palevioletred;
  --white: #e6f1ff;
  --grey: #dadee8;
  --green: rgb(24, 236, 151);
  --green-tint: rgba(100, 255, 218, 0.1);
  --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
  --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
  --fz-xxs: 12px;
  --fz-xs: 13px;
  --fz-sm: 14px;
  --fz-md: 16px;
  --fz-lg: 18px;
  --fz-xl: 20px;
  --fz-xxl: 22px;
  --fz-heading: 32px;
  --border-radius: 4px;
  --nav-height: 100px;
  --nav-scroll-height: 70px;
  --tab-height: 42px;
  --tab-width: 120px;
  --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  --hamburger-width: 30px;
}

body {
  margin: 0;
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color:var(--blue);
  color: var(--white);
  font-family: var(--font-sans);
  font-size: var(--fz-xl);
  line-height: 1.3;
  
  @media (max-width: 480px) {
    font-size: var(--fz-lg);
  }
}

 `