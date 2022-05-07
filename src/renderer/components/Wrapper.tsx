import styled from 'styled-components';
import { useRef } from 'react';
import Sidebar from './Sidebar';
import { Content } from './Content';

export default function Wrapper() {
  const WrapperContainer = styled.div`
    display: flex;
  `;

  function newNote() {
    childRef.current.newNote();
  }
  function openNote(props) {
    childRef.current.openNote(props);
  }

  const childRef = useRef();

  return (
    <WrapperContainer>
      <Sidebar newNote={newNote} openNote={openNote} />
      <Content ref={childRef} />
    </WrapperContainer>
  );
}
