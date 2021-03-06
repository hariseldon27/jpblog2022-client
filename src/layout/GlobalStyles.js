import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   
html, body{
    margin:0px; padding:0px;
  }
  
  *, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
body {
     font-family: "Monaco", monospace;
     background: ${({ theme }) => theme.background};
     color: ${({ theme }) => theme.color};
     transition: all 2s linear; 
  }
`