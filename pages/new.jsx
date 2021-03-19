import React from 'react';
import { Container } from '@material-ui/core';
import { NewNoteForm } from '../src/ui/NewNoteForm/NewNoteForm';

export default function Home() {
  return (
    <Container maxWidth="md" component="main">
      <NewNoteForm />
    </Container>
  );
}
