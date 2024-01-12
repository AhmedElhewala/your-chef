import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
    --color-grey-0: #F8F9FA;
    --color-grey-100: #E9ECEF;
    --color-grey-200: #DEE2E6;
    --color-grey-300: #CED4DA;
    --color-grey-400: #ADB5BD;
    --color-grey-500: #6C757D;
    --color-grey-600: #495057;
    --color-grey-700: #343A40;
    --color-grey-800: #212529;
    --color-grey-900: #16191c;

  }
  
  &, &.dark-mode {
    --color-grey-0: #16191c;
    --color-grey-100: #212529;
    --color-grey-200: #343A40;
    --color-grey-300: #495057;
    --color-grey-400: #6C757D;
    --color-grey-500: #ADB5BD;
    --color-grey-600: #CED4DA;
    --color-grey-700: #DEE2E6;
    --color-grey-800: #E9ECEF;
    --color-grey-900: #F8F9FA;
    
  }
  
  --overlay-background: rgba(0, 0, 0, 0.3);
  --main-transition: 0.3s
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color var(--main-transition), color var(--main-transition);
}

*:disabled {
  cursor: not-allowed;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  width: 100%;
  min-height: 100vh;
  font-size: 1.6rem;
  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  position: relative;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

a:focus-visible,
select:focus-visible,
input:focus-visible,
button:focus-visible,
textarea:focus-visible {
    border: none;
    outline: none;
}

a:focus,
select:focus,
textarea:focus,
input:focus,
input:focus {
    outline: none;
}

img,
svg,
a,
li,
button {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

img {
  max-width: 100%;
}

button {
  border: none
}

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background-color: var(--color-grey-100);
}

::-webkit-scrollbar-thumb {
  background-color: var(--color-grey-300);
  box-shadow: 0 0 4px 1px var(--color-grey-400) inset;
  border-radius: 5px;
  transition: var(--main-transition);
}

::-webkit-scrollbar-thumb:hover {
  box-shadow: 0 0 6px 1px var(--color-grey-500) inset;
}

`;

export default GlobalStyles;