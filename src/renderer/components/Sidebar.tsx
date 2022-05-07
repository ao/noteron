import styled from 'styled-components';

export default function Sidebar(props) {
  const SidebarContainer = styled.div`
    width: 200px;
    height: 100vh;
    border: 1px solid #999;
  `;
  const Button = styled.button`
    background: 'palevioletred';
    color: 'white';
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;
  `;

  const notes = [];
  props.notes.map((data) => {
    notes.push(
      <div onClick={() => props.openNote({ uuid: data.uuid })}>{data.title}</div>
    );
  });

  return (
    <SidebarContainer>
      <div>
        <Button onClick={() => props.newNote()}>Add Note +</Button>
      </div>
      <div>{notes}</div>
    </SidebarContainer>
  );
}
