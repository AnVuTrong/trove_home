export const resolvers = {
  Query: {
    // Health check resolver
    health: () => 'GraphQL API is running!'
  },

  Mutation: {
    // Placeholder mutation resolver
    _empty: () => null
  }
}; 