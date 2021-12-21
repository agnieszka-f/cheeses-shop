import React from 'react';
import { shallow } from 'enzyme';
import { GalleryComponent } from './Gallery';

describe('Component Gallery', () => {
  it('should render without crashing', () => {
    const component = shallow(<GalleryComponent />);
    expect(component).toBeTruthy();
  });
});
