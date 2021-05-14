import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --font-mono: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  scrollbar-color: ${(props) => props.theme.green} rgb(46,54,69);
  scrollbar-width: thin;
}

body {
  margin: 0;
  width: 100%;
  min-height: 100%;
  font-size: 1.1rem;
  overflow-x: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color:${(props) => props.theme.darkNavy};
  color: ${(props) => props.theme.white};
  font-family: "Helvetica", "Calibre", -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;;
  line-height: 1.3;
  

  .fadeIn-enter {
    transform: translateX(-100px);
      opacity: 0;
    }

  .fadeIn-enter-active {
      opacity: 1;
      transform: translateX(0px);
      transition: opacity 800ms ease-in-out, transform 1050ms ease-in-out;
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
    transform: translateY(-20px);
    opacity: 0;
  }
  .fadeContact-enter-active {
    transform: translateY(0px);
    opacity: 1;
    transition: all 300ms ease-in;
  }
  .fadeContact-exit {
    transform: translateY(0px);
    opacity: 1;
  }
  .fadeContact-exit-active {
    transform: translateY(20px);
    opacity: 0;
    transition: all 300ms ease-in-out;
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

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.green}; 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.hoverGreen}; 
  }
}`;
