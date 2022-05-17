import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from 'components/global/Button'

describe('button component', () => {
  it('render button component', () => {
    const { getByRole } = render(<Button />)

    expect(getByRole('button')).toBeInTheDocument()
  })

  it('calls onClick function if clicked', () => {
    const handleClick = () => { console.log('clicked!')}
    const logSpy = jest.spyOn(console, 'log')
    render(<Button handleClick={handleClick}/>)

    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(logSpy).toHaveBeenCalled()
  })
});

