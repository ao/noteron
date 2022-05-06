import styled from 'styled-components';
import { useRef } from 'react';
import Sidebar from './Sidebar';
import { Content } from './Content';

export default function Wrapper() {
  const WrapperContainer = styled.div`
    display: flex;
  `;

  function newNote() {
    console.log('new note!');
    childRef.current.newNote();
  }

  const childRef = useRef();

  return (
    <WrapperContainer>
      <Sidebar newNote={newNote} />
      <Content ref={childRef} />
    </WrapperContainer>
  );
}
