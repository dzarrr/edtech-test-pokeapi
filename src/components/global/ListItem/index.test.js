import React from 'react'
import { render } from '@testing-library/react'
import ListItem from 'components/global/ListItem'

test('renders element correctly', () => {
  const { asFragment } = render(<ListItem />)

  expect(asFragment()).toMatchSnapshot()
});
