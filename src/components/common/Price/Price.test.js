import React from 'react';
import { shallow } from 'enzyme';
import { PriceComponent } from './Price';

describe('Component Price', () => {
  it('should render without crashing', () => {
    const component = shallow(<PriceComponent />);
    expect(component).toBeTruthy();
  });
});
