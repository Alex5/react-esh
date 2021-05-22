import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  height: 70px;
  align-items: center;
`

export const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  padding: 0 15px 0 15px;

  @media (min-width: 576px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`

export const StyledLogo = styled.img`
  height: 40px;
  align-self: center;
  margin-right: 32px;
`
export const StyledNavActions = styled.div`
  display: flex;
  margin-left: 32px;
`