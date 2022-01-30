# PokemonApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Pages details

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#header">Header</a></li>
    <li><a href="#body">Body</a></li>
    <li><a href="#footer">Footer</a></li>
    <li><a href="#error handling">Error handling</a></li>
  </ol>
</details>

## Header

create a header component (name it NavComponent):
the header contains the following elements:

- Title of the app
- Input field for searching pokemon
- Selector for change the pokemon image mode (default or shiny)
- Passing the input value && the pokemonMode to the service through a method setMessage() using Observable to watch the changes

## Body

create a body component (name it PokemonListComponent) contains the following elements:

- louping through the pokemon data and creating a list of pokemon cards
- add a different background color to the cards its depending on the pokemon type (grass, fire, water etc)
- include background image for each pokemon as open pokemon-ball image
- include icons to describe the pokemon details (height, weight, health, attack, defense, speed)
- add a hover effect to the pokemon image to show the pokemon from back-side
- implement pagination to show the next pokemon-list
- get the user input value && the pokemonMode value from the service through a method getMessage() && getMode in order to filter the list of the pokemon and change the pokemon image mode
- increment the number of pokemon when the user enter a litter in the input field from 16 from 150 in order to searching through the whole pokemon list

## Footer

- create a footer component (name it FooterComponent)

- add a copyright text

## Error handling

- create a loader component && loader interceptor (name it LoaderComponent)
- implement a loading spinner to handle the delay of the server response, its loading till getting 200 status response

- create a not Found component (name it notFoundComponent)
- handling the not founding route and get a msg with a link to back to pokemon list component

- implement a RouterModule(router-outlet) to move between not found component and the main
- implement a error message to show it to the user if the server response with an error or if the pokemon is not found

## feature improvements

- add a landing page includes a pokemon animation closing pokemon turned and then opening and then redirection to pokemon list component
- add a pokemon move animation
- working on unit tests
