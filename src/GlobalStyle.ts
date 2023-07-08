import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root {
    margin: 0 auto;
    padding: 2rem;
    text-align: center;    
  }

  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

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

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }
  
  /*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  margin: 0;
    display: flex;
    min-width: 280px;
    min-height: 100vh;

    color: white;
}
/*
  5. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  6. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  7. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  8. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
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
