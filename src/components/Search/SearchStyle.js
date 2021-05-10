import styled from 'styled-components'

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