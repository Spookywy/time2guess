# Time2Guess

A party game where players have to guess words

## Deployment

The application is deployed at the following addresses:

- https://time2guess.vercel.app (Vercel)
- https://time2guess.pages.dev (Cloudflare Pages - static version of Time2Guess)

Production and previews deployments are automatically triggered.

Clouflare Pages deployments are triggered on pushes to branches matching the pattern `static-*`.

Vercel deployments are triggered on pushes to all branches except those matching the pattern `static-*`.

Clouflare Pages production branch is `static-main`.

Vercel production branch is `main`.

### Prisma

This project uses Prisma for database management.

During Preprod/Prod deployment **on Vercel**, the Prisma client is automatically regenerated and all pending migrations are applied to the Preprod/Prod database.

## Development

Install dependencies

```
bun install
```

Starts a local Prisma PostgreSQL database

```
bun prisma dev
```

Apply migrations and generate the Prisma client

```
bun prisma migrate dev
```

Starts the Next.js development server

```
bun run dev
```
