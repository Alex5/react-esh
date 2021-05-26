import styled from 'styled-components'
import closeBlack from '../../assets/img/close_black_24dp.svg'

export const StyledSearch = styled.div`
  display: flex;
  width: 100%;
`

export const StyledInput = styled.div<{activePopup: boolean, inputValue: number}>`
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

  .close-button {
    display: ${props => props.inputValue !== 0 ? "block" : 'none'};
    z-index: 10;
    position: absolute;
    height: 24px;
    width: 24px;
    border: none;
    font-weight: 600;
    color: gray;
    right: 15px;
    background-color: unset;
    background-image: url(${closeBlack});
    background-repeat: no-repeat;
  }
`


export const StyledDropDown = styled.div<{activePopup: boolean}>`
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

export const StyledResult = styled.div<{chipItems: number}>`
  display: flex;
  flex-direction: column;
  padding: 15px;
  z-index: 30;

  h3 {
    margin-top: 0;
  }

  ul {
    display: grid;
    grid-template-columns: ${props => props.chipItems > 0 ? '1fr 1fr 1fr' : '1fr'};
    grid-gap: 15px;
    padding: 0;
    max-height: calc(100vh - 250px);
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

