/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import {
  ApolloClient, createHttpLink, InMemoryCache, ApolloProvider,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Container, Box, CssBaseline } from '@material-ui/core';
import theme from '../src/theme';
import { Header } from '../src/ui/Header/Header';

Amplify.configure({
  Auth: {
    region: 'eu-central-1',
    userPoolId: 'eu-central-1_J0Lq8JzbH',
    userPoolWebClientId: '1u2uaidnf7kud7kki6flbe2csh',
    mandatorySignIn: false,
  },
});

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const httpLink = createHttpLink({
    uri: 'https://znf6d4kbejejzmxvi2vrybkwei.appsync-api.eu-central-1.amazonaws.com/graphql',
  });

  const authLink = setContext(async (_, { headers }) => {
    const user = await Auth.currentSession();

    return {
      headers: {
        ...headers,
        authorization: user.accessToken.jwtToken,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <AmplifyAuthenticator>
      <Head>
        <title>Notes App /w AWS AppSync</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <style>
          {`:root {
            --amplify-primary-color: #3f51b5;
            --amplify-primary-tint: #3f51b5;
            --amplify-primary-shade: #3f51b5;
          }

          amplify-authenticator {
            --container-justify: center;
            --container-align: center;
          }`}
        </style>
      </Head>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <CssBaseline />
          <Header />
          <Box mt={12} mb={4}>
            <Container maxWidth="md" component="main">
              <Component {...pageProps} />
            </Container>
          </Box>
        </ApolloProvider>
      </ThemeProvider>
    </AmplifyAuthenticator>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
