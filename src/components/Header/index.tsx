import { Container } from "./styles";
// import { Logo } from './logo';

export function Header() {
  return (
    <Container>
      <div>
        {/* <Logo /> */}
        Logo
      </div>
      <div className="menus">
        <p className='title'>Menus</p>
        <p className='title'>Menus</p>
        <p className='title'>Menus</p>
        <p className='title'>Menus</p>
      </div>
    </Container>
  )
}
