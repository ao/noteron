import styled from 'styled-components';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { TheEditor } from './TheEditor';
import { v4 as uuidv4 } from 'uuid';

export const Content = forwardRef((props, ref) => {
  const [note, setNote] = useState({});

  useImperativeHandle(ref, () => ({
    newNote() {
      createNewNote();
    },
    openNote(props) {
      openExistingNote(props);
    },
  }));

  function createNewNote() {
    console.log('new note!!!!!!!!!!!');
    setNote({
      id: uuidv4(),
      title: 'test',
      body: 'test2',
    });
  }
  function openExistingNote(props) {
    console.log('open existing note!!!!!', props);
  }

  const ContentContainer = styled.div`
    width: calc(100% - 200px);
    height: 100vh;
    padding: 25px;
  `;
  return (
    <ContentContainer>
      <TheEditor data={note} />
    </ContentContainer>
  );
});
