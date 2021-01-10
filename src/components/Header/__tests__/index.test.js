import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '..';

afterEach(cleanup);

describe('Header Component', () => {
  // renders Header test
  // first test
  it('renders', () => {
    render(<Header/>);
  });

  // second test
  it('matches snapshot DOM node structure', () => {
    // render Header
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  })

});