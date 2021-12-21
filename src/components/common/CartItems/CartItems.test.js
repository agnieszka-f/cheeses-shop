import React from 'react';
import { shallow } from 'enzyme';
import { CartItemsComponent } from './CartItems';

describe('Component CartItems', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartItemsComponent />);
    expect(component).toBeTruthy();
  });
});
