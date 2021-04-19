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
  --font-xl: 5rem, 
  --font-l: 3rem,
  --font-m: 1.5rem, 
  --font-s: 1rem,
  --font-xs .8rem,
  --fz-heading: 32px;
  --border-radius: 4px;
  --nav-height: 100px;
  --nav-scroll-height: 70px;
  --tab-height: 42px;
  --tab-width: 120px;
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

.fadeIn-appear {
  transform: translateX(-50px);
    opacity: 0;
  }

.fadeIn-appear-active {
    opacity: 1;
    transform: translateX(0px);
    transition: opacity 1000ms ease-in-out, transform 1000ms ease-in-out;

  }

}

 `