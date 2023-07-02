import { useState } from "react"
import { BigContainer, Title, GeneratePasswordContainer, Screen, OptionsContainer, OptionButton } from "./styles"

const generatePassword = () => {
  const allPossibilites = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_!@$#&%"
  let generatedPassword = ""

  for(let i = 12; i > 0; i--) {
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

  return (
    <BigContainer>
      <Title>Gerador de senhas</Title>

      <GeneratePasswordContainer>
        <Screen>{password}</Screen>

        <OptionsContainer>
          <OptionButton type="button" data-action="generate"
            onClick={() => {
              setPassword(generatePassword()) 
              setCopyToClipboard(false)}
            }
          >
            Gerar
          </OptionButton>

          <OptionButton type="button" data-action="copy" data-active={copiedToClipboard.toString()}
            onClick={() => setCopyToClipboard(copyToClipboard(password))}>
            {
              copiedToClipboard ? 'Copiado!' : 'Copiar'
            }
          </OptionButton>
        </OptionsContainer>
      </GeneratePasswordContainer>
    </BigContainer>
  )
}