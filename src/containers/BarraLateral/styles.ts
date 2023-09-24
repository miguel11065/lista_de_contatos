import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  padding: 16px;
  background-color: ${variaveis.corDeFundoLeteral};
  height: 100vh;

  @media (max-width: 820px) {
    height: 40vh;
  }
`

export const Titulo = styled.h1`
  margin-bottom: 16px;
  text-align: center;
  color: ${variaveis.corDoTexto};
  background-color: ${variaveis.corDeFundoLeteral};
`

export const Input = styled.input`
  padding: 8px;
  border: none;
  width: 100%;
  margin-bottom: 8px;
  border-radius: 8px;
  color: ${variaveis.corDoTexto};
  background-color: ${variaveis.CorCardInput};
  font-size: 16px;

  &::placeholder {
    color: ${variaveis.placeholder};
  }
`

export const Button = styled.button`
  padding: 8px;
  width: 100%;
  border-radius: 8px;
  color: ${variaveis.corDoTexto};
  background-color: ${variaveis.botaoCadastrar};
  border: none;
  cursor: pointer;
  font-wiight: bold;
  font-size: 16px;
`
