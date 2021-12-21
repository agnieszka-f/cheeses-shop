import React from 'react';
import { shallow } from 'enzyme';
import { TabsComponent } from './Tabs';

describe('Component Tabs', () => {
  it('should render without crashing', () => {
    const component = shallow(<TabsComponent />);
    expect(component).toBeTruthy();
  });
});
