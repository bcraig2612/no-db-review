Student can write a functioning react application
Student can write a functioning Express API
Student can request data from Express API
Student can display data from Express API

# no db planning sesh

## frontend checklist

- RESET.css
- package.json
  - main
  - proxy
    - port :9001

## front-end folder structure

- src/
  - App.js
  - index.js
  - components/
    - Header/
      - Header.js
      - Header.css
    - MemeDisplayer/
      - MemeDisplayer.js
      - MemeDisplayer.css
    - MemeCollection/
      - MemeCollection.js
      - MemeCollection.css

## dependencies

`axios`

## backend-checklist

port = 9001;

## back-end folder structure

- server/
  - index.js
  - controller/
    - memeController.js

## dependencies

`express`

## routes

get: '/api/dem_memes'
get: '/api/dem_memes/:id'
post: '/api/dem_memes'
put: '/api/dem_memes/:id'
delete: '/api/dem_memes/:id'
