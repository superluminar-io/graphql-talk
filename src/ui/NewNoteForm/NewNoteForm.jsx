import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(1),
    },
  },
  buttonGroup: {
    '& > *:first-child': {
      marginRight: theme.spacing(1),
    },
  },
}));

export const NewNoteForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="title" label="Title" fullWidth />
      <TextField id="text" label="What's on your mind?" fullWidth multiline rows={10} />
      <Box className={classes.buttonGroup} component="div" mt={3} display="flex" justifyContent="flex-end">
        <Link href="/" passHref>
          <Button variant="contained" component="a">Cancel</Button>
        </Link>
        <Button variant="contained" color="primary" type="submit">Create</Button>
      </Box>
    </form>
  );
};
