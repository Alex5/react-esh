import styled from "styled-components";

export const RecipesItem = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 15px;
  transition: 0.3s;
  z-index: 20;
  
  &:hover {
    background: whitesmoke;
    cursor: pointer;
  }
`
export const RecipesItemImage = styled.div`
  margin-right: 15px;

  img {
    object-fit: cover;
    height: 100px;
    width: 100px;
    border-radius: 15px;
  }
`
export const RecipesItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`

export const RecipesItemInfoHeader = styled.div`
  margin-bottom: 15px;

  span {
    font-size: 18px;
    font-weight: 600;
  }
`

export const RecipesItemInfoBody = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #535353;
    margin-bottom: 5px;
  }
`

export const RecipesItemInfoFooter = styled.div`
  span {
    color: #535353;
  }
`