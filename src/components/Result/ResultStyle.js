import styled from 'styled-components'
import coverImage from '../../assets/img/foodEat.svg'

export const ResultRoot = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`

export const ResultHeader = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 24px;
  font-family: 'TT Norms Medium', sans-serif;
`

export const ResultBody = styled.div`
  max-height: 500px;
  overflow: auto;

  ul {
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 5px;
    }
  }
`

export const AddedChips = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
`

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

export const ResultFooter = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
`

export const FoundRecipes = styled.div`

  display: flex;
  flex-direction: column;
`

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

export const ResultPlaceholder = styled.div`
  background-image: url(${coverImage});
  background-repeat: no-repeat;
  background-position: center;
  height: 500px;
`
