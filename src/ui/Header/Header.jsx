import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Button, Link as MaterialLink,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative" component="header" className={classes.root}>
      <Toolbar>
        <Link href="/" passHref>
          <MaterialLink variant="h6" color="inherit" className={classes.title}>
            Notes
          </MaterialLink>
        </Link>

        <Link href="/new" passHref>
          <Button color="inherit" component="a">New note</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
