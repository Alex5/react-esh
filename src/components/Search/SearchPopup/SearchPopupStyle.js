import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, .1);
  transition: background .2s ease-out;
  z-index: 10;
  display: ${props => props.activePopup ? "" : "none"};
`



