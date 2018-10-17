# Donut Dynasty

You'll be building a full stack application for a new company that creates and ships custom donuts.

The application MVP involves three primary features:

 - Listing all donuts
 - Creating a new custom donut with custom toppings
 - Adding donuts to a shopping cart and placing an order

The main objective is to:

```terminal
Create a full stack CRUD application
that contains multiple, connected tables in a SQL database
and responds to AJAX requests from the React client
```

## Technologies

- Server
  - Node / Express
  - Postgres DB
  - Knex Query Builder
- Client
  - React

## Requirements

This solo sprint is a greenfield project but with technology decisions and specific user stories already made for you. Just like your future job!

You are encouraged to go beyond the initial MVP and add your own features and flair!

1. Create an ERD with a tool like [draw.io](https://draw.io) and include the image in your final repository

2. Complete all user stories (see [userstories.md](./userstories.md))

3. Let users add their own custom donut images

4. Create your own custom feature that incorporates an external API.

5. Add user accounts

6. Take it to the next level. Your donut shop is starting to take off, users are demanding new an exciting features! Can you distrupt the donut the industry?

    - You could create a dashboard that shows the most popular donut toppings, most donuts sold, etc.
    - Add a voting feature to each donut
    - Add searching and filtering of donuts

## Server Routes Overview

| VERB          | PATH        | Description            |
| --------- |-----------------| -----------------------|
| GET       | `api/donuts`    | returns json of all donuts |
| POST      | `api/donuts`    | insert new donut to donuts table |
| GET       | `api/toppings`  | returns json of all toppings |
| POST      | `api/toppings`  | insert new topping to toppings table |
| POST      | `api/orders`    | insert new order to orders table, returns order number|

## Getting Started

 - client: npm install, npm build, npm start
 - server: npm install, knex migrate:latest, knex seed:run, npm start