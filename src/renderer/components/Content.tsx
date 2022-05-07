import styled from 'styled-components';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { TheEditor } from './TheEditor';
import { v4 as uuidv4 } from 'uuid';

export const Content = forwardRef((props, ref) => {
  const [note, setNote] = useState({ uuid: uuidv4(), title: '', body: '' });

  // useEffect(() => {
  //   setInterval(() => {
  //     props.saveNote(note);
  //   }, 5000);
  // });

  useImperativeHandle(ref, () => ({
    newNote() {
      createNewNote();
    },
    openNote(props) {
      openExistingNote(props);
    },
  }));

  function createNewNote() {
    setNote({
      uuid: uuidv4(),
      title: '',
      body: '',
    });
  }
  function openExistingNote(props) {
    console.log(props)
    setNote(props)
  }
  function saveNote(data: object) {
    if (data.uuid==undefined) data.uuid = uuidv4()
    props.saveNote(data);
  }

  const ContentContainer = styled.div`
    width: calc(100% - 200px);
    height: 100vh;
    padding: 25px;
  `;
  return (
    <ContentContainer>
      <TheEditor data={note} saveNote={saveNote} />
    </ContentContainer>
  );
});
