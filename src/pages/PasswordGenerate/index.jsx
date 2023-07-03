import { useState } from "react"
import { BigContainer, Title, GeneratePasswordContainer, Screen, OptionsContainer, Container } from "./styles"
import { Password } from "./components/PasswordInput"
import { Button } from "./components/Button"

const generatePassword = (size) => {
  if(size <= 0) return

  const allPossibilites = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_!@$#&%"
  let generatedPassword = ""

  for(let i = Math.floor(size); i > 0; i--) {
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
  const [showInput, setShowInput] = useState(false)

  return (
    <BigContainer>
      <Title>Gerador de senhas</Title>

      <GeneratePasswordContainer>
        <Screen>{password}</Screen>

        <OptionsContainer>
          {showInput && <Password passwordSize={passwordSize} setPasswordSize={setPasswordSize} />}

          <Button onClick={() => setShowInput((prev) => !prev)}>Custumizar tamanho</Button>

          <Container>
            <Button 
              data-action="generate"
              onClick={() => {
                setPassword(generatePassword(showInput ? passwordSize || 0 : 12)) 
                setCopyToClipboard(false)}
              }
            >
              Gerar senha de {showInput ? passwordSize || 0 : 12} caracteres
            </Button>

            <Button 
              data-action="copy" 
              data-active={copiedToClipboard.toString()}
              onClick={() => setCopyToClipboard(copyToClipboard(password))}
            >
              {copiedToClipboard ? 'Copiado!' : 'Copiar'}
            </Button>
          </Container>
        </OptionsContainer>
      </GeneratePasswordContainer>
    </BigContainer>
  )
}