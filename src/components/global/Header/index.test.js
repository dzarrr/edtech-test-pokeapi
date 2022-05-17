import React from 'react'
import { render } from '@testing-library/react'
import Header from 'components/global/Header'

test('renders element correctly', () => {
  const { asFragment } = render(<Header />)

  expect(asFragment()).toMatchSnapshot()
});
