import styled from '@emotion/styled';

export const ToastContainer = styled.div`
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1500;
`;

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  width: 20rem;
  height: 5rem;
  padding: 0 20px;
  align-items: center;
  border-radius: 1rem;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  border: 1px solid #ccc;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  opacity: 1;
  transition: opacity 0.4s ease-out;
  &:first-of-type {
    animation: move 0.4s ease-out forwards;
  }
  &:not(:first-of-type) {
    margin-top: 8px;
  }
  @keyframes move {
    0% {
      margin-top: 50px;
    }
    100% {
      margin-top: 0;
    }
  }
`;

export const Message = styled.div`
  margin-top: 0.2rem;
  color: #828282;
`;

export const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 5px;
  background-color: #ffdd85;
  animation-name: progress;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  @keyframes progress {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;
