import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --green: #5e5656;
  --blue: #3a435c;
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
  color: #e6f1ff;
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
    transition: opacity 800ms ease-in-out, transform 600ms ease-in-out;
  }

.fade-enter {
  transform: translateY(20px);
  opacity: 0;
}
.fade-enter-active {
  transform: translateY(0px);
  opacity: 1;
  transition: all 200ms linear;
}
.fade-exit {
  opacity: 1;
}
.fade-exit-active {
  opacity: 0;
  transition: opacity 300ms ease-in-out;
}


.fadeContact-enter {
  transform: translateY(20px);
  opacity: 0;
}
.fadeContact-enter-active {
  transform: translateY(0px);
  opacity: 1;
  transition: all 300ms linear;
}
.fadeContact-exit {
  opacity: 1;
}
.fadeContact-exit-active {
  opacity: 0;
  transition: opacity 500ms ease-in-out;
}



.fadeNav-appear {
  transform: translateY(-50px);
    opacity: 0;
  }

.fadeNav-appear-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 600ms ease-in-out, transform 500ms ease-in-out;
  }

  .fadeLogo-appear {
    opacity: 0;
  }

.fadeLogo-appear-active {
    opacity: 1;
    transition: opacity 700ms ease-in-out;
  }



}

 `;
