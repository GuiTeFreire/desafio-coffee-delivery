import { useTheme } from 'styled-components'
import { CoffeeList, Intro, Items, Title } from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeCard } from '../../components/CoffeeCard'
import { coffees } from '../../../data.json'

export function Home() {
  const theme = useTheme()

  return (
    <div>
      <Intro>
        <div>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </Title>
          <Items>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
              />
              <span>Compra simples e segura</span>
            </div>

            <div>
              <Package
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors['base-text'] }}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <Timer
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.yellow }}
              />
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <Coffee
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.purple }}
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </Items>
        </div>

        <img src="src\assets\homeIntro.svg" alt="Café do Coffee Delivery" />
      </Intro>

      <CoffeeList>
        <h2>Nossos cafés</h2>
        <div>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </div>
  )
}
