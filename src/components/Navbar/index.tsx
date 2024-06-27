import { Container, Aside } from './styles'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'

export function Navbar() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to={`checkout`}>
          <ShoppingCart size={22} weight="fill" />
        </Link>
      </Aside>
    </Container>
  )
}
