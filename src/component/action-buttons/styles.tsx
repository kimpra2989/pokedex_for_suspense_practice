import styled from '@emotion/styled'

const Buttons = styled.div`
  position: absolute;
  bottom: 10%;
  left: 55%;
  width: 65%;
  transform: translate(-57%, 0);
  display: flex;
  gap: 20px;

  .button {
    width: 50%;
    padding: 4%;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: clamp(8px, 5vw, 1rem);
    font-weight: 600;
    color: white;
    background-color: #444;
    box-shadow: -2px 3px 0 #222, -4px 6px 0 #000;

    &:active:not(:disabled) {
      box-shadow: inset 2px 3px 0 #222;
      font-size: 0.9rem;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`

export default Buttons
