import Editor from 'rich-markdown-editor';
import styled from 'styled-components';

export const TheEditor = (props) => {
  const Title = styled.input`
    width: 100%;
    padding: 5px;
    border: 1px solid #dcdcdc;
    font-size: 15px;
  `;

  const { uuid } = props.data;
  let { title } = props.data;
  let { body } = props.data;

  function saveNoteTitle(value: string) {
    title = value;
    saveNote();
  }
  const saveNoteBody = (value: () => any) => {
    body = value();
    saveNote();
  };

  function saveNote() {
    props.saveNote({
      uuid,
      title,
      body,
    });
  }

  return (
    <>
      <Title
        placeholder="note title.."
        value={props.title}
        onChange={(el) => {
          saveNoteTitle(el.currentTarget.value);
        }}
      />
      <Editor
        placeholder="your note.."
        value={props.body}
        onChange={saveNoteBody}
      />
    </>
  );
};
