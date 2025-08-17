# Time2Guess

A party game where players have to guess words

## Deployment

The application is deployed at the following addresses:

- https://time2guess.fun
- https://time2guess.vercel.app

### Prisma

This project uses Prisma for database management.

During Preprod/Prod deployment, the Prisma client is automatically regenerated and all pending migrations are applied to the Preprod/Prod database.

## Development

Install dependencies

```
npm install
```

Starts a local Prisma PostgreSQL database

```
npx prisma dev
```

Apply migrations and generate the Prisma client

```
npx prisma migrate dev
```

Starts the Next.js development server

```
npm run dev
```
