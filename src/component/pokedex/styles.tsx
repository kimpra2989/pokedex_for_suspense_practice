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
