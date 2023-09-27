import styled from 'styled-components'
import variaveis from '../styles/variaveis'

export const Card = styled.div`
  background-color: ${variaveis.CorCardInput};
  padding: 16px;
  margin-bottom: 16px;
  margin-top: 16px;
  border-radius: 16px;
  display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: 230px 230px 230px 1fr 1fr;
  grid-gap: 8px;
  justify-items: center;

  @media (max-width: 820px) {
    display: inline-block;
  }
`
export const CampoContato = styled.textarea`
  color: ${variaveis.corDoTexto};
  font-size: 14px;
  font=weight: bold;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  resize: none;
  width: 100%;
  height: 30px;
  margin-left: 8px;
  text-align: center;
  border: 2px solid black;
  background-color: transparent;

  @media (max-width: 820px) {
    max-width: 100%;
    margin-left: 0px;
  }
`

export const Botao = styled.button`
  font-size: 12px;
  color: ${variaveis.corDoTexto};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.botaoEditar};
  border-radius: 8px;
  margin-right: 8px;

  @media (max-width: 820px) {
    margin-top: 8px;
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.botaoSalvar};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.botaoCancelarRemover};
`
