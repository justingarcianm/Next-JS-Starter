import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* FONTS */
/* ================================= */

@font-face {
    font-family: fa;
    src: url();
}

@import url();

/* ================================= */

/* ROOT STYLES */
/* ================================= */
:root {
    --heading-one-size:0;
    --heading-one-height: calc(var(--heading-one-size) + 1rem);
    --heading-two-size:0;
    --heading-two-height: calc(var(--heading-two-size) + 1rem);
    --heading-three-size:0;
    --heading-three-height: calc(var(--heading-three-size) + 1rem);
    --heading-four-size:0;
    --heading-four-height: calc(var(--heading-four-size) + 1rem);
    --text-size:0;
    --text-height: calc(var(--text-size) + .5rem);
    --small-size:0;

    --light-color:0;
    --dark-color:0;
    --accent-color:0;

    --padding-l:0;
    --padding-m:0;
    --padding-s:0;

    --container-main:0;
    --container-inner:0;
}

/* ================================= */

/* BASE STYLES */
/* ================================= */

*,
*:before,
*:after {
    box-sizing: border-box;
    scroll-behavior: smooth;
    padding: 0;
    margin: 0;
}

h1 {
    font-size: var(--heading-one-size);
    line-height: var(--heading-one-height);
    font-weight: bold;
    margin:.5rem 0;
    font-family: fa;
}

h2 {
    font-size: var(--heading-two-size);
    line-height: var(--heading-two-height);
    font-weight: normal;
    margin:.5rem 0;
    font-family: fa;
}

h3 {
    font-size: var(--heading-three-size);
    line-height: var(--heading-three-height);
    font-weight: normal;
    margin:.5rem 0;
    font-family: fa;
}

h4 {
    font-size: var(--heading-four-size);
    line-height: var(--heading-four-height);
    font-weight: bold;
    margin:.5rem 0;
    font-family: fa;
}

p,
p * {
    font-size: var(--text-size);
    line-height: var(--text-height);
    margin: 1rem 0;
}

a {
    font-size: inherit;
    color:inherit;
}

a:visited, {
a:hover {
    font-size: inherit;
    color:inherit;
}

img {
    width: 100%;
}

`