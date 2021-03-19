import React from 'react';
import { Container } from '@material-ui/core';
import { NotesList } from '../src/ui/NotesList/NotesList';

export default function Home() {
  return (
    <Container maxWidth="md" component="main">
      <NotesList />
    </Container>
  );
}
