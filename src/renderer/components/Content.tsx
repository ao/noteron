import styled from 'styled-components';
import { forwardRef, useImperativeHandle } from 'react';
import { TheEditor } from './TheEditor';

export const Content = forwardRef((_props, ref) => {
  useImperativeHandle(ref, () => ({
    newNote() {
      createNewNote();
    },
  }));

  function createNewNote() {
    console.log('new note!!!!!!!!!!!');
  }

  const ContentContainer = styled.div`
    width: calc(100% - 200px);
    height: 100vh;
    padding: 25px;
  `;
  return (
    <ContentContainer>
      <TheEditor />
    </ContentContainer>
  );
});
