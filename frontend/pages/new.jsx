import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { NewNoteForm } from '../src/ui/NewNoteForm/NewNoteForm';

const NEW_NOTE = gql`
  mutation NewNote($title: String!, $text: String!) {
    createNote(title: $title, text: $text) {
      title
      text
    }
  }
`;

export default function New() {
  const router = useRouter();
  const [newNote, { loading }] = useMutation(NEW_NOTE, {
    onCompleted: () => router.push('/'),
  });

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  const handleTextChange = (e) => {
    setText(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newNote({
      variables: {
        title,
        text,
      },
    });
  };

  return (
    <NewNoteForm
      onTextChange={handleTextChange}
      onTitleChange={handleTitleChange}
      title={title}
      text={text}
      disabled={loading || false}
      onSubmit={handleSubmit}
    />
  );
}
