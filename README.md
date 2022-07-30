# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Desktop Static State](./screenshots/Desktop%20static%20state.png)
![Desktop Hover State](./screenshots/Desktop%20hover%20state.png)
![Mobile Static State](./screenshots/mobile%20static%20state.png)
![Mobile Hover State](./screenshots/Mobile%20hover%20state.png)

### Links

- Solution URL: [Advice Generator Repo](https://github.com/MarioLisbona/FEM-advice-generator)
- Live Site URL: [Advice Generator Live URL](https://mariolisbona.github.io/FEM-advice-generator/)

## My process
I created a centered advic container with a h1 for the advice number and a sibling div for the advice content
i then created a div for the diviver image. I used the picture element to contain the dekstop and mobile dividers for each resolution.
Then created a button to get a new piece of adivce.

In the JavaScript, i created the code to fetch the advice inside a function. That funcion is called every time the page is loaded, and everytime the button is clicked.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

This was the first time i had written code to call an API. I found a youtube video where he explained how to code the solution. I have never used promises before so did not totally understand how they work, but managed to tweak the code to work for my solution.

### Continued development

I am going to do more research on API calling and also on promises in JavaScript

### Useful resources

- [Display Random Advice On Your Website or Web App Using Advice Slip JSON API](https://www.youtube.com/watch?v=2AfzKmgqWUE) - I watched this video and tweaked the code to work for my solution.

- [APIs for Beginners - How to use an API](https://www.youtube.com/watch?v=GZvSYJDk-us&list=PL8ml6VuR8a30Kaz3Yd1r9XP5lzUxKNL8T&index=3) - This was a more general look at how API's work and how to use them.

## Author

- Frontend Mentor - [@MarioLisbona](https://www.frontendmentor.io/profile/MarioLisbona)
- Twitter - [@MarioLisbona](https://www.twitter.com/MarioLisbona)

