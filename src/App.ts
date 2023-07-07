import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
`;

export const Form = styled.form`
  background-color: #000082;
  min-height: 260px;
  padding: 8px;
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
`;

export const ListItem = styled.li<{ completed: boolean, isSelected: boolean }>`
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  background-color: ${(props) => (props.isSelected ? 'purple' : 'transparent')};

`;

export const Input = styled.input`
  width: 30%;
  box-sizing: border-box;
  border: 2px solid rgb(174 , 168 , 168);
  border-radius: 4px;
  background-color: rgb(141 , 200 , 245);
  padding: 8px 20px;
  transition: width 0.4s ease-in-out;
  &:focus {
    width: 100%;
  }
`;
