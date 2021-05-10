import styled from 'styled-components'

export const FoundResultWrapper = styled.div`
 
`

export const FoundResultHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  padding: 15px 0 15px 0;
  position: sticky;
  background: white;
  
  h1 {
    margin: 0;
  }
`

export const FoundResultBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3vw;

  @media (min-width: 320px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`