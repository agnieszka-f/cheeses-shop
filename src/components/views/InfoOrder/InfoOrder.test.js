import React from 'react';
import { shallow } from 'enzyme';
import { InfoOrderComponent } from './InfoOrder';

describe('Component InfoOrder', () => {
  it('should render without crashing', () => {
    const component = shallow(<InfoOrderComponent />);
    expect(component).toBeTruthy();
  });
});
