import styled from "styled-components";

export const Chip = styled.div`
  border: 1px solid #dddddd;
  padding: 15px;
  border-radius: 10px;
`

export const ChipHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  align-items: center;

  button {
    border: none;
    cursor: pointer;
    padding: 0;
    height: 24px;
    background: transparent;
  }

  span {
    font-size: 16px;
    font-weight: 600;
    margin-right: 5px;
  }
`