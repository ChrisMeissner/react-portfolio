import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '..';

afterEach(cleanup);

describe('Footer Component', () => {
  // renders Footer test
  // first test
  it('renders', () => {
    render(<Footer/>);
  });

  // second test
  it('matches snapshot DOM node structure', () => {
    // render Footer
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  })

});