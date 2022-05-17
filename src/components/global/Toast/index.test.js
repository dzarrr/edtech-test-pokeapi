import React from 'react'
import { render } from '@testing-library/react'
import Toast from 'components/global/Toast'

test('renders element correctly', () => {
  const { asFragment } = render(<Toast />)

  expect(asFragment()).toMatchSnapshot()
});
