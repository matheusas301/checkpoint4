import { Button } from "../button/button"
import { Logo } from "../logo/logo"
import { ElementHeader, HeaderContainer } from "./header.style"

export const Header = () => {
  return (
    <ElementHeader>
      <HeaderContainer>
        <Logo />
        <Button>Login</Button>
      </HeaderContainer>
    </ElementHeader>
  )
}