import Editor from 'rich-markdown-editor';
import styled from 'styled-components';

export const TheEditor = () => {
  const Title = styled.input`
    width: 100%;
    padding: 5px;
    border: 1px solid #dcdcdc;
    font-size: 15px;
  `;
  return (
    <>
      <Title placeholder="note title.." />
      <Editor placeholder="your note.." />
    </>
  );
};
