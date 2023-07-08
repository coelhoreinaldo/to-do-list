import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root {
    margin: 0 auto;
    padding: 2rem;
    text-align: center;    
  }
  
  *, *::before, *::after {
  box-sizing: border-box;
}

  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background: linear-gradient(179.4deg, rgb(12, 20, 69) -16.9%, rgb(1 15 26) 119.9%);
    background-attachment: fixed;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
    -webkit-text-size-adjust: 100%;
    ::-webkit-scrollbar {
  width: 6px; 
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #3b82f6; 
  border-radius: 3px; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  body {
    margin: 0;
    display: flex;
    min-width: 280px;
    min-height: 100vh;

    color: white;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
  
`;

export default GlobalStyle;
