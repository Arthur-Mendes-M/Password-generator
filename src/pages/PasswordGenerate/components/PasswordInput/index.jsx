import { PasswordSizeInput, Field } from './styles'

export const Password = ({passwordSize, setPasswordSize}) => {
  return (
    <Field>
      <label htmlFor="password">Tamanho da senha</label>
      <PasswordSizeInput type="number" id='password' min={1} placeholder="Digite um valor :)" value={passwordSize} onChange={event => setPasswordSize(event.currentTarget.value < 0 ? 0 : event.currentTarget.value)} />
    </Field>
  )
}