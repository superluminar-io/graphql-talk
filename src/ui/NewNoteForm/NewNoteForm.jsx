import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, TextField } from '@material-ui/core';
import { PropTypes } from 'prop-types';

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

export const NewNoteForm = ({
  title, text, onSubmit, disbaled, onTextChange, onTitleChange,
}) => {
  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={onSubmit} autoComplete="off">
      <TextField id="title" label="Title" value={title} onChange={onTitleChange} fullWidth disbaled={disbaled} required />
      <TextField id="text" label="What's on your mind?" value={text} onChange={onTextChange} fullWidth multiline required rows={10} disbaled={disbaled} />
      <Box className={classes.buttonGroup} component="div" mt={3} display="flex" justifyContent="flex-end">
        <Link href="/" passHref>
          <Button variant="contained" component="a">Cancel</Button>
        </Link>
        <Button variant="contained" color="primary" type="submit" disbaled={disbaled}>Create</Button>
      </Box>
    </form>
  );
};

NewNoteForm.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disbaled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
};
