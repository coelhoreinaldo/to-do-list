import styled from 'styled-components';

const HeaderStyled = styled.header`
  position:fixed;
  top: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: flex-end;
  background: transparent;
  color: white;
  width: 100%;
  margin: 8px 0;
`;

const H1 = styled.h1`
`;

const A = styled.a`
  color: white;
  font-size: 1.7rem;
  text-decoration: none;
  transition: all;
  transition-duration: 150ms;

&:hover {
  color: aquamarine;
}
`;
export default function Header() {
  return (
    <HeaderStyled>
      <H1>To do list</H1>
      <A href="https://github.com/coelhoreinaldo/to-do-list" target="_blank" rel="noreferrer">
        <i className="ri-github-fill" />
      </A>
    </HeaderStyled>
  );
}
