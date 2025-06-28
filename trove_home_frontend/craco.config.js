/**
 * CRACO configuration - excludes @react-keycloak packages from source-map-loader
 * wherever that loader appears in the CRA webpack config.
 */
const EXCLUDE_PKGS = [
  /node_modules[\\/]@react-keycloak[\\/]core/,
  /node_modules[\\/]@react-keycloak[\\/]web/,
];

/** Recursively walk a rule tree to find source-map-loader rules */
function visitRules(rules, visitor) {
  if (!rules) return;
  rules.forEach((rule) => {
    if (rule.loader && rule.loader.includes('source-map-loader')) {
      visitor(rule);
    }
    if (rule.use) visitRules(Array.isArray(rule.use) ? rule.use : [rule.use], visitor);
    if (rule.oneOf) visitRules(rule.oneOf, visitor);
    if (rule.rules) visitRules(rule.rules, visitor);
  });
}

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      visitRules(webpackConfig.module.rules, (sourceMapRule) => {
        sourceMapRule.exclude = Array.isArray(sourceMapRule.exclude)
          ? [...sourceMapRule.exclude, ...EXCLUDE_PKGS]
          : EXCLUDE_PKGS;
      });
      return webpackConfig;
    },
  },
}; 