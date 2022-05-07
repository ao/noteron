import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import Sidebar from './Sidebar';
import { Content } from './Content';

export default function Wrapper() {
  useEffect(() => {
    newNote();
  }, []);
  const WrapperContainer = styled.div`
    display: flex;
  `;

  const [notes, setNotes] = useState<any[]>([]);

  function newNote() {
    childRef.current.newNote();
  }
  function openNote(props) {
    childRef.current.openNote(props);
  }

  function saveNote(data: { uuid: any; title: any; body: any; }) {

    const note = notes.filter((obj) => {
      return obj.uuid === data.uuid;
    });

    if (note.length === 0) setNotes([...notes, data]);
    else {
      for (let i = 0; i < notes.length; i++) {
        if (notes[i].uuid === data.uuid) {
          const newArr = [...notes];
          newArr[i].title = data.title;
          newArr[i].body = data.body;
          setNotes(newArr);
          break;
        }
      }
    }

    console.log(notes);

  }

  const childRef = useRef();

  return (
    <WrapperContainer>
      <Sidebar newNote={newNote} openNote={openNote} notes={notes} />
      <Content ref={childRef} saveNote={saveNote} />
    </WrapperContainer>
  );
}
