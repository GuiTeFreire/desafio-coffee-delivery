import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.header`
  max-width: 72.5rem;
  padding: 2rem 1.25rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Aside = styled.aside`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    background-color: ${({ theme }) => theme.colors['purple-light']};

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    span {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }

    padding: 0.625rem 0.5rem;
    border-radius: 0.375rem;
  }

  a {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};

    padding: 0.5rem;
    border-radius: 0.375rem;

    position: relative;

    &[aria-disabled='true'] {
      pointer-events: none;
    }

    span {
      ${mixins.fonts.textS};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
      border-radius: 50%;
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0rem;
      right: 0rem;
      transform: translate(50%, -50%);
    }
  }
`
