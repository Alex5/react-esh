import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 13px;
  color: white;
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;
  background: #3a3a3a;
  font-size: 14px;

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    background: #494949;
  }
`