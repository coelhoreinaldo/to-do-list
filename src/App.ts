/* eslint-disable max-len */
import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
`;

export const Form = styled.form`
  border-radius: 16px;
  align-self: flex-start;
  background-color: #000082;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  min-height: 260px;
  padding: 8px;
  max-width: 460px;
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  align-items: center;
  gap: 8px;
`;

export const ListItemButtons = styled(Div)`
  justify-content: flex-end;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  gap: 8px;
`;

export const ListItem = styled.li<{ $completed: boolean, $isSelected: boolean }>`
  text-decoration: ${(props) => (props.$completed && 'line-through')};
  background-color: ${(props) => props.$isSelected && 'purple'};
  transform: ${(props) => props.$isSelected && 'translateY(-6px)'};
  box-shadow: ${(props) => props.$isSelected && 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'};
  transition: all 250ms;
  width: 100%;
  text-align: left;
  border: 1px solid black;
  border: ${(props) => props.$isSelected && '1px solid red'};
  display: flex;
  justify-content: space-between;

`;

export const Input = styled.input`
  width: 30%;
  box-sizing: border-box;
  border: 2px solid rgb(174 , 168 , 168);
  border-radius: 4px;
  background-color: #091238;
  color: white;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  transition: width 0.4s ease-in-out;
  &:focus {
    width: 100%;
  };
`;

export const Button = styled.button<{ $color?: string }>`
  align-items: center;
  background-clip: padding-box;
  background-color: ${(props) => (props.$color ? props.$color : '#091238')};
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover,
  &:focus {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }

  &:disabled {
    background-color: aliceblue;
    color: black;
  }
`;

// Button by "Sketch" via https://getcssscan.com/css-buttons-examples?ref=beautifulboxshadow-bottom;
