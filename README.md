<p align="center"><img height="100" src="https://cdn.worldvectorlogo.com/logos/apollo-graphql-compact.svg"/></p>
<h1 align="center"> Apollo-server simple API </h1>

---

## About the project

This project is a GraphQL API made with Apollo-Server library. The goal is to learn GraphQL with Apollo-Server code structure and how it works so I can use this knowledge to write better code and maintain a current project at work that uses these technologies.

## Development Flow

### Define models and Data Source interfaces

This is library-independent code. The model properties are defined in `models` directory, and the `interfaces` directory contains data source methods.

### Define model GraphQL schema

The schema is located at `src/modules/<model>/schema.graphql`

### Generate types for Typescript

This project uses graphql-codegen, the code is generated with the script `yarn generate`

### Implement queries and migrations

Here we implement all the logic and business rules. Each migration and query should be in a seperate file in `src/modules/<model>/mutations` and `src/modules/<model>/queries`
