# Time2Guess

A party game where players have to guess words

## Development

```
npm run
```

## Deployment

The application is deployed at the following address: https://time2guess.vercel.app

## Prisma

This project uses Prisma for database management.

Create a new migration with:

```
npx prisma migrate dev --name <migration_name>
```

During deployment, the Prisma client is automatically regenerated and all pending migrations are applied to the production database.
