import styled from "styled-components";

export const FoundItemWrapper = styled.div`
  display: flex;
  padding: 15px;
  transition: 0.3s;
  color: rgb(46, 46, 46);

  @media (min-width: 320px) {
    flex-direction: column;
  }

  a {
    color: black;
    text-decoration: unset;
  }

  &:hover {
    padding: 15px;
    background: rgb(236, 236, 236);
    border-radius: 15px;
    cursor: pointer;
  }
`

export const FoundItemImage = styled.div`
  img {
    width: 250px;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
    margin-right: 15px;

    @media (min-width: 320px) {
      width: 100%;
      margin-bottom: 15px;
    }
  }
`

export const FoundItemBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding-left: 15px;
  flex: 1;

  h1 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 10px;
    }
  }
`