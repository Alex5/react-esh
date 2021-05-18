import styled from "styled-components";

export const StyledRow = styled.div`
  width: 100%;
  margin-bottom: 8px;
`
export const StyledItem = styled.div`
  flex-direction: column;
  padding: 5px;
  background: #fff;
  border-radius: 18px;
  margin-right: 12px;
  box-shadow: 0 2px 8px rgb(18 17 36 / 4%), 0 4px 32px rgb(18 17 36 / 8%);
  transition: 0.3s;
  
  &:hover {
    box-shadow: 0 2px 8px rgb(18 17 36 / 10%), 0 4px 32px rgb(18 17 36 / 20%);
  }
`

export const StyledItemHeader = styled.div`
  display: flex;
  padding: 8px 10px 8px 16px;
`

export const StyledPhoto = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 12px;

  img {
    border-radius: 36px;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`
export const StyledName = styled.span`
  font-size: 14px;
`

export const StyledItemBody = styled.div`
  flex-grow: 1;

  img {
    border-radius: 12px;
    height: 360px;
    width: 100%;
    object-fit: cover;
  }
`
export const StyledItemFooter = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 8px 10px 8px 16px;
`