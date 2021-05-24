import React from "react";
import styled, {keyframes} from 'styled-components'

const Rolling = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const LdsRing = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 34px;
  z-index: 30;
  
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    margin: 8px;
    border: 4px solid rgb(0, 0, 0);
    border-radius: 50%;
    animation: ${Rolling} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: rgb(0, 0, 0) transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`

const Loader = () => {
    return (
        <LdsRing>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </LdsRing>
    );
};

export default Loader;
