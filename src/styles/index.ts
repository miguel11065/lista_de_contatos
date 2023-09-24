import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  background-color: ${variaveis.corDeFundo};
}`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 350px auto;

  @media (max-width: 820px) {
    display: block;
  }
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;

  @media (max-width: 820px) {
    max-width: 100%;
  }
`

export default EstiloGlobal
