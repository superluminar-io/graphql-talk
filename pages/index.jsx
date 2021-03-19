import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { NotesList } from '../src/ui/NotesList/NotesList';

const LIST_NOTES = gql`
  query ListNotes {
    listNotes {
      title
      text
      createdAt
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(LIST_NOTES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return <NotesList notes={data.listNotes} />;
}
