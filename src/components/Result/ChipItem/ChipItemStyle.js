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

export const ChipFooter = styled.div`
  button {
    border: none;
    background: white;
    border-radius: 5px;
    color: darkgray;
    font-weight: 600;
    padding: 5px;

    &:hover {
      background: #e5e5e5;
      color: black;
    }
  }
`