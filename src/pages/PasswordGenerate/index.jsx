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

  return (
    <BigContainer>
      <Title>Gerador de senhas</Title>

      <GeneratePasswordContainer>
        <Screen>{password}</Screen>

        <OptionsContainer>
          <Password passwordSize={passwordSize} setPasswordSize={setPasswordSize} />

          <Container>
            <Button 
              data-action="generate"
              onClick={() => {
                setPassword(generatePassword(passwordSize)) 
                setCopyToClipboard(false)}
              }
            >
              Gerar
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