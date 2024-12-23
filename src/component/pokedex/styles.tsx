import styled from '@emotion/styled'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 640px;
  background-image: url('/pokedex_for_suspense_practice/pokedex.png');

  .pokemon_image {
    position: absolute;
    bottom: 55%;
    left: 55%;
    transform: translate(-63%, 20%);
    height: 18%;
  }

  .error-message {
    position: absolute;
    bottom: 53%;
    margin: 0 auto;
    left: 55%;
    transform: translate(-63%, 20%);
    height: 18%;
    color: red;
    font-size: 24px;
    font-weight: bold;
    z-index: 5;
    backdrop-filter: blur(3px);
  }

  .dimmed {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 255px;
    height: 170px;
    border-radius: 14px;
    transform: translateY(170px);
    background-color: gray;
    opacity: 0.2;
  }

  .error {
    opacity: 0.3;
  }

  .reset-button {
    padding: 6px 12px;
    background-color: transparent;
    margin-top: 14px;
    border-radius: 4px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  .pokemon_data {
    position: absolute;
    font-weight: 600;
    color: #3a444d;
    top: 54.5%;
    right: 20%;
    font-size: clamp(8px, 5vw, 25px);
    text-transform: capitalize;
  }

  input {
    position: absolute;
    width: 65%;
    top: 68%;
    left: 18%;
    padding: 4%;
    outline: none;
    border: 2px solid #333;
    border-radius: 5px;
    font-size: 600;
    color: #3a444d;
    font-size: clamp(8px, 5vw, 1rem);
    box-shadow: -3px 4px 0 #888, -5px 7px 0 #333;
  }
`

export { Container }
