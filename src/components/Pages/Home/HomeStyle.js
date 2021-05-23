import styled from 'styled-components'

export const StyledMain = styled.main`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const HomeWrapper = styled.div`

`

export const SideBar = styled.div`
  width: calc(50vw - 328px);
  min-width: 240px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      &:first-child {
        border-bottom: 1px solid #e6e6e6;
        padding-bottom: 15px;
      }

      a {
        display: flex;
        align-items: center;
        border-radius: 8px;
        padding: 10px;
        text-decoration: none;
        color: black;
        font-weight: 600;

        &.active {
          background-color: #f3f1ed;
        }
      }
    }
  }
`
export const Content = styled.div`
  height: calc(100vh - 100px);
  overflow: auto;
  z-index: 2;
  padding-left: 30px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #eeeeee;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d0d0d0;
    border-radius: 5px;

    &:active {
      background: #a8a8a8;
    }
  }
`
export const ContentTitle = styled.span`
  display: block;
  padding-bottom: 16px;
  font-size: 24px;
  font-family: 'TT Norms Medium', sans-serif;
`

export const ContentBody = styled.div`
  display: grid;
  grid-template-columns: 542px 364px;

  a {
    color: black;
    text-decoration: none;
  }
`








