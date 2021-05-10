import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

const phoneWidth = '750px'
const tabletWidth = '970px'
const desktopWidth = '1170px'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

export const AppContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 2vw;

  @media (min-width: 576px) {
    width: ${phoneWidth};
  }
  @media (min-width: 992px) {
    width: ${tabletWidth};
  }
  @media (min-width: 1200px) {
    width: ${desktopWidth};
    flex-direction: row;
  }
`

export const ContainerSearch = styled.div`
  flex: 1;
  align-self: center;
`
export const ContainerResult = styled.div`
  flex: 2;
`