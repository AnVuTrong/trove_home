export const typeDefs = `#graphql
  # Basic Query type (GraphQL requires at least one query)
  type Query {
    # Health check endpoint
    health: String
  }

  # Basic Mutation type
  type Mutation {
    # Placeholder mutation
    _empty: String
  }
`; 