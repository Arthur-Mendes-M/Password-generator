import { useState } from "react"
import { BigContainer, Title, GeneratePasswordContainer, Screen, OptionsContainer, Container, ActionButton, PasswordSizeInput } from "./styles"

const generatePassword = (size) => {
  const allPossibilites = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_!@$#&%"
  let generatedPassword = ""

  for(let i = size; i > 0; i--) {
    const number = Math.floor(Math.random() * allPossibilites.length)
    generatedPassword += allPossibilites[number]
  }

  return generatedPassword
}

const copyToClipboard = (text) => {
  if(!text) return

  window.navigator.clipboard.writeText(text)
  return true
}

export const PasswordGenerate = () => {
  const [password, setPassword] = useState("")
  const [copiedToClipboard, setCopyToClipboard] = useState(false)
  const [passwordSize, setPasswordSize] = useState(12)

  return (
    <BigContainer>
      <Title>Gerador de senhas</Title>

      <GeneratePasswordContainer>
        <Screen>{password}</Screen>

        <OptionsContainer>
          <PasswordSizeInput type="number" min={1} placeholder="Tamanho da senha" value={passwordSize} onChange={event => setPasswordSize(event.currentTarget.value <= 0 ? 12 : event.currentTarget.value)} />

          <Container>
            <ActionButton type="button" data-action="generate"
            onClick={() => {
              setPassword(generatePassword(passwordSize)) 
              setCopyToClipboard(false)}
            }>
            Gerar
            </ActionButton>

            <ActionButton type="button" data-action="copy" data-active={copiedToClipboard.toString()}
            onClick={() => setCopyToClipboard(copyToClipboard(password))}>
            {
              copiedToClipboard ? 'Copiado!' : 'Copiar'
            }
            </ActionButton>
          </Container>
        </OptionsContainer>
      </GeneratePasswordContainer>
    </BigContainer>
  )
}