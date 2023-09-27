import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        numero
      })
    )
  }

  return (
    <S.Form onSubmit={cadastrarContato}>
      <S.Titulo>Cadastrar novo contato</S.Titulo>
      <S.Input
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        type="text"
        placeholder="Nome"
        required
      />
      <S.Input
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        type="email"
        placeholder="Email"
        required
      />
      <S.Input
        value={numero}
        onChange={(evento) => setNumero(evento.target.value)}
        type="tel"
        placeholder="Número"
        required
      />
      <S.Button type="submit">Cadastrar</S.Button>
    </S.Form>
  )
}

export default BarraLateral
