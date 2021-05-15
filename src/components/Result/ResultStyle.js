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

export const ResultFooter = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
`

export const FoundRecipes = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: black;
  }
`

export const IngredientsPlaceholder = styled.div`
  background-image: url(${coverImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 500px;
`
export const RecipesPlaceholder = styled.div`
  background-image: url(${coverImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 500px;
`
