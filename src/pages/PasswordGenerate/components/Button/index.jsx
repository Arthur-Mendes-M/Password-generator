import { ActionButton } from "./styles"

export const Button = (props) => {
  return (
    <ActionButton type="button" {...props}>{props.children}</ActionButton>
  )
}
