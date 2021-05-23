import styled from 'styled-components'

export const StyledSearch = styled.div`
  display: flex;
  width: 100%;
`

export const StyledInput = styled.div`
  z-index: 20;
  width: 100%;
  position: relative;
  height: 40px;
  align-items: center;
  display: flex;
  border-radius: 75px;
  background: ${props => props.activePopup ? 'white' : '#F3F1ED'};
  transition: 0.3s;

  input {
    width: 100%;
    height: 100%;
    border: none;
    position: absolute;
    background: none;
    outline: none;
    font-size: 16px;
    padding: 0 56px 0 48px;
  }

  .search-icon {
    z-index: 10;
    position: absolute;
    left: 15px;
  }
`

export const SearchWrapper = styled.div`
  background: #fff;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(230, 230, 230, 0.16), 0 3px 6px rgba(151, 151, 151, 0.23);
  border-radius: 10px;
  animation: 3s ease-in 1s 2 reverse both paused slidein;
  transition: 0.3s;
`

export const SearchBlock = styled.div`
  position: relative;

  img {
    position: absolute;
    bottom: 15px;
    left: 15px;
  }
`

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  outline: none;
  justify-content: center;
  transition: ease-in 0.1s;
  font-size: 15px;
  padding: 15px 15px 15px 50px;

  &:focus {
    border-radius: 10px;
    border-color: black;
  }
`

export const SearchResult = styled.div`
  overflow: auto;
  max-height: 200px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #e6e6e6;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #b7b7b7;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;


    li {
      font-size: 18px;
      color: grey;
      padding: 10px;
      margin-left: 10px;
      margin-right: 10px;
      cursor: pointer;

      &:hover {
        background: #f5f5f5;
        border-radius: 8px;
        color: black;
      }
    }
  }
`

export const StyledDropDown = styled.div`
  position: absolute;
  top: 38px;
  width: 100%;
  margin: 8px auto 0;
  display: ${props => props.activePopup ? "grid" : "none"};
  grid-template-columns: 1fr 1fr;
  background: white;
  z-index: 20;
  border-radius: 16px;

`
export const StyledIngredients = styled.div`
  padding: 15px;

  h3 {
    margin-top: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    max-height: 500px;
    overflow: auto;
    list-style: none;

    li {
      padding: 10px;
      transition: 0.3s;
      border-radius: 7px;
      cursor: pointer;

      &:hover {
        background: #eaeaea;
      }
    }
  }
`

export const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  z-index: 30;

  h3 {
    margin-top: 0;
  }

  ul {
    display: grid;
    grid-template-columns: ${props => props.chipItems.length > 0 ? '1fr 1fr 1fr' : '1fr'};
    grid-gap: 15px;
    padding: 0;
    max-height: 500px;
    overflow: auto;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
`

export const StyledResultHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

