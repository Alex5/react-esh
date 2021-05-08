import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 13px;
  color: white;
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;
  background: #83cc98;
  font-size: 16px;
  
  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    background: #71af84;
  }
`