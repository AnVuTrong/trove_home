export class HealthService {
  /**
   * Returns a static string indicating the GraphQL API is up.
   * This simple method is isolated here so that future health-check logic
   * can be expanded (e.g., checking DB connectivity) without touching the resolver layer.
   */
  public health(): string {
    return 'GraphQL API is running!';
  }
} 