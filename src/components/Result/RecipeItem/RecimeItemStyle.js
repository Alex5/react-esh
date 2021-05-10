import styled from "styled-components";

export const RecipesItem = styled.div`
  display: flex;
  padding: 15px;
  border-radius: 15px;
  transition: 0.3s;
  
  &:hover {
    background: whitesmoke;
    cursor: pointer;
  }
`
export const RecipesItemImage = styled.div`
  margin-right: 15px;

  img {
    object-fit: cover;
    height: 150px;
    width: 150px;
    border-radius: 15px;
  }
`
export const RecipesItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const RecipesItemInfoHeader = styled.div`
  margin-bottom: 15px;

  span {
    font-size: 24px;
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