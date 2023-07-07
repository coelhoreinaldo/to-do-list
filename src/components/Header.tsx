import styled from 'styled-components';

const HeaderStyled = styled.header`
  position:fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  background: transparent;
  color: white;
  width: 100%;
`;

const H1 = styled.h1`
`;

export default function Header() {
  return (
    <HeaderStyled>
      <H1>To do list</H1>
    </HeaderStyled>
  );
}
