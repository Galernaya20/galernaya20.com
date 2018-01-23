//@flow

import {injectGlobal} from 'styled-components'
injectGlobal`
  html {
    box-sizing: border-box;
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
                 "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 16px;
    line-height: 1.5;

    @media (min-width: 1250px) {
      font-size: 18px;
    }
  }

  body {
    margin: 0;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
  }

  a {
    -webkit-text-decoration-skip: objects;
  }

  img {
    border-style: none;
  }

  [type=button]::-moz-focus-inner,
  [type=reset]::-moz-focus-inner,
  [type=submit]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [type=button]:-moz-focusring,
  [type=reset]:-moz-focusring,
  [type=submit]:-moz-focusring,
  button:-moz-focusring {
    outline: none;
  }

  table {
    border-collapse: collapse;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0 0 32px;

    @media (max-width: 700px) {
      padding-bottom: 24px;
    }
  }

  h1,
  h2,
  h3 {
    line-height: 1.2;
  }

`
