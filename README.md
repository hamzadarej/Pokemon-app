# PokemonApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Pages details

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#header">Header</a>
      <ul>
        <li><a href="#body">Body</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">footer</a>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

## Header

create a header component (name it NavComponent):
the header contains the following elements:

- title of the app
- input field for searching pokemon
- selector for change the pokemon image mode (default or shiny)

## Body

create a body component (name it PokemonListComponent):

- get a image, title , type , image of the pokemon from the pokemon-api
  the body contains the following elements:
- list of pokemon with a different background color its depending on the pokemon type (grass, fire, water etc)
- include background image for each pokemon as open pokemon-ball image
- include icons to describe the pokemon details (height, weight, health, attack, defense, speed)
- add a hover effect to the pokemon image to show the pokemon back-side
- implement pagination to show the next pokemon
- implement a loading spinner to show to handle the delay of the server response its loading till getting 200 status response
- implement a error message to show it to the user if the server response with an error or if the pokemon is not found
- handling the not existing route and get a link to back to pokemon list component

## footer

## Usage
