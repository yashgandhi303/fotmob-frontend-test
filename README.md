# WisePops Frontend Test

## Requirements

* [Node.js](https://nodejs.org)
* [Yarn](https://yarnpkg.com)

## Basics

Unagi is on a mission to upgrade fantasy sport game to a new level.

In this exercise, we'll test your React skills by creating a simple collection card website.

The project is already setup in this repository so to start, fork it and when
you are done, invite @hmatthieu to collaborate on it.

Don't spend more than 4 hours on this test.

## Steps

For each step that follows you will have to edit some files already provided,
but don't hesitate to go further. Also, it will be great if you split your
steps using branches or commits.

Don't hesitate to over-engineer the problem a bit, so we will be able to see
how you will work, split and organize your file on a real project.

``` sh
# Install dependencies
yarn

# Start API & Dev server
yarn start
```

### 1. Show a static card on `/collection` page

Go to [Collection.tsx](src/pages/Collection.tsx) file and fill `Collection` component to show
a card that contains the message stored in `card` variable.

This page can be seen on http://localhost:8000/collection

### 2. Fetch collection from a fake REST API

Go to [collection.ts](/src/lib/collection.ts) file and replace `fetchCollection` function
body to fetch cards from http://localhost:8001/cards instead.

This will imply some change on `Collection` component too.

### 3. Edit the popup on `/create-card` page

Go to [CreateCard.tsx](/src/pages/CreateCard.tsx) file and fill `CreateCard` component to
be able to create a card. For information, we use
[json-server](https://github.com/typicode/json-server) as a fake API server.
So you will be able to persist change on this API.
(Basically, you can POST json onto http://localhost:8001/cards)

### 4. Show all the card as a collection

On a real use case, we don't want to show only one card so adapts the code to show each
cards in a collection (a grid of cards for example).
Make sure that this screen is responsive.

## Scoring

You will be evaluated based on the following criteria:
- Functionality (Does your code work ? Think build, warnings, error management)
- Readability (Is your code maintainable ? Think code splitting, Typescript, Git)
- Creativity is a bonus (Did you go further the scope ?) but should not interfere with the two previous point.
