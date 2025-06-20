# Trove frontend

## Development Bypass Auth

If you need to preview the Dashboard or Admin pages before Keycloak (or another auth provider) is wired, you can temporarily bypass route protection:

1. Create an `.env.local` at project root (ignored by git) and add:

```bash
REACT_APP_BYPASS_AUTH=true
```

2. Restart the dev server (`yarn start`).

🔐  IMPORTANT: Never commit `.env.local` with this flag enabled. Remove the variable or set it to `false` before deploying to staging/production.