import React from 'react'
import { render } from '@testing-library/react'
import Card from 'components/global/Card'

test('renders element correctly', () => {
  const { asFragment } = render(<Card />)

  expect(asFragment()).toMatchSnapshot()
});
