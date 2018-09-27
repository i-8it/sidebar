# Yelp Restaurant Page

> Project description

## Related Projects

  - https://github.com/yelpreactor/sidebar
  - https://github.com/yelpreactor/user-reviews
  - https://github.com/yelpreactor/photo-wheel
  - https://github.com/yelpreactor/frequent-terms

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## CRUD API

Create
 - Adds a new restaurant to the database
 - POST - /api/restaurant
Read
 - Retrieves a Restaurant from the database, given its name or ID
 - GET - /api/restaurant/:nameOrID
Update
 - Updates a restaurant, given its name or ID
 - PUT - /api/restaurant/:nameOrID
Delete
 - Deletes a restaurant from the database, given its name or ID
 - DELETE - /api/restaurant/:nameOrID


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 8.11.3
- MySQL 5.7.23

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

