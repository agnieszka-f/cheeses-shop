import React from 'react';
import { shallow } from 'enzyme';
import { DetailsComponent } from './Details';

describe('Component Details', () => {
  it('should render without crashing', () => {
    const component = shallow(<DetailsComponent />);
    expect(component).toBeTruthy();
  });
});
