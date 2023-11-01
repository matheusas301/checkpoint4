import { Button } from "../button/button"
import { Logo } from "../logo/logo"
import { ElementHeader, HeaderContainer } from "./header.style"

export const Header = () => {

  const onClick = () => {
    
  }

  return (
    <ElementHeader>
      <HeaderContainer>
        <Logo />
        <Button onClick={onClick}>Login</Button>
      </HeaderContainer>
    </ElementHeader>
  )
}