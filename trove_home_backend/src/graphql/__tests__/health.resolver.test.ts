import { resolvers } from '../resolvers.graphql';

describe('GraphQL Resolvers - Health', () => {
  it('should return health string', () => {
    expect(resolvers.Query.health()).toBe('GraphQL API is running!');
  });

  it('should return null for _empty mutation', () => {
    expect(resolvers.Mutation._empty()).toBeNull();
  });
}); 