import { HealthService } from '../services/Health.service';

const healthService = new HealthService();

export const resolvers = {
  Query: {
    // Health check resolver
    health: () => healthService.health(),
  },

  Mutation: {
    // Placeholder mutation resolver
    _empty: () => null
  }
}; 