<p align="center"><img height="100" src="https://cdn.worldvectorlogo.com/logos/apollo-graphql-compact.svg"/></p>
<h1 align="center"> Apollo-server simple API </h1>

---

## About the project

This project is a GraphQL API made with Apollo-Server library. The goal is to learn GraphQL with Apollo-Server code structure and how it works so I can use this knowledge to write better code and maintain a current project at work that uses these technologies.

## Running locally

### Create database

This project users mysql8. You can change connection data according to your settings in `knexfile.ts`

```js
connection: {
  database: "graphql",
  user: "root",
  password: "toor",
},
```

### Define envoronment variables

Define a value for these specific environment variables (others are optional)

```
PRIVATE_KEY
ADMIN_USERNAME
ADMIN_PASSWORD
```

### Install dependecies

Run `yarn install`

### Setup database

Run migrations and seeds

```bash
yarn migrate:latest && yarn knex seed:run
```

### Run `yarn dev`

Your server is ready!
