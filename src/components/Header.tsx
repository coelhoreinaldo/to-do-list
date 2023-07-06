import styled from 'styled-components';

const HeaderStyled = styled.header`
  position:fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: #0b55e0;
  color: white;
  width: 100%;
`;

const H1 = styled.h1`
  margin: 8px;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <H1>To do list</H1>
      <h2>Clique duas vezes em um item para marcá-lo como completo.</h2>
    </HeaderStyled>
  );
}
