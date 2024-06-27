import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Container, Heading, InfoContent, Order, OrderInfo } from './styles'
import { useTheme } from 'styled-components'
import { useCart } from '../../hooks/useCart'
import { useParams } from 'react-router-dom'
import delivery from '../../assets/delivery.svg'

export function Success() {
  const { orders } = useCart()
  const { orderId } = useParams()
  const orderInfo = orders.find((order) => order.id === Number(orderId))
  const paymentMethod = {
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
    cash: 'Dinheiro',
  }
  const theme = useTheme()

  if (!orderInfo?.id) {
    return null
  }

  return (
    <Container>
      <Order>
        <Heading>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>

        <OrderInfo>
          <InfoContent>
            <div>
              <MapPin
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.purple }}
                size={32}
              />

              <div>
                <span>
                  Entrega em{' '}
                  <strong>{(orderInfo.street, orderInfo.number)}</strong>
                </span>

                <span>
                  {orderInfo.neighborhood} - {orderInfo.city},{orderInfo.state}
                </span>
              </div>
            </div>

            <div>
              <Timer
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.yellow }}
                size={32}
              />

              <div>
                <span>Previsão de entrega</span>

                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
                size={32}
              />

              <div>
                <span>Pagamento na entrega</span>

                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
              </div>
            </div>
          </InfoContent>
        </OrderInfo>
      </Order>

      <img src={delivery} alt="Pedido concluído" />
    </Container>
  )
}
