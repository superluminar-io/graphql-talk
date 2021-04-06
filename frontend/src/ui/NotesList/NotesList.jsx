import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export const NotesList = ({ notes }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {notes.map((note, index) => (
        <React.Fragment key={note.createdAt}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={note.title}
              secondary={note.text}
            />
          </ListItem>
          {notes.length !== index + 1 && <Divider variant="middle" component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.exact({
    __typename: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    createdAt: PropTypes.string,
  })).isRequired,
};
