import styled, { keyframes } from "styled-components";

/*
@keyframes bounce {
                0%,to {
                    transform: translateY(-25%);
                    -webkit-animation-timing-function: cubic-bezier(.8,0,1,1);
                    animation-timing-function: cubic-bezier(.8,0,1,1)
                }

                50% {
                    transform: none;
                    -webkit-animation-timing-function: cubic-bezier(0,0,.2,1);
                    animation-timing-function: cubic-bezier(0,0,.2,1)
                }
            }
            */
const gradientAnimation = keyframes`
  0%,
  to {
    background-size: 200% 200%;
    background-position: 0;
  }

  50% {
    background-size: 200% 200%;
    background-position: 100%;
  }
`;

const Text = styled.span`
  background-image: linear-gradient(
    90deg,
    rgb(251, 191, 36),
    rgb(52, 211, 153),
    rgb(14, 165, 233)
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: ${gradientAnimation} 8s ease infinite;
`;

export default Text;
