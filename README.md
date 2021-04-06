# GraphQL Talk

## Getting started

### Checkout

```sh
$ git clone git@github.com:superluminar-io/graphql-talk.git
$ cd graphql-talk
$ yarn
```

### Environment variables

Create a `.env.local` file in the `frontend` folder:

```
# Environment variables for Cognito User Pool
NEXT_PUBLIC_COGNITO_REGION=xxxxx
NEXT_PUBLIC_COGNITO_USER_POOL_ID=xxxxx
NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_ID=xxxxxx

# Environment Variables for GraphQL API
NEXT_PUBLIC_API_ENDPOINT=http://localhost:4000/graphql
```

The local dev setup starts a simple mock api. Update the environment variable `NEXT_PUBLIC_API_ENDPOINT` to use your real AppSync API.

### Local Development

```
$ yarn start
```
Open http://localhost:3000.