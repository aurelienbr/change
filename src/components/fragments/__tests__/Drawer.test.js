import React from 'react';
import { shallow } from 'enzyme';
import Drawer from './../Drawer';

describe('Drawer', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      // eslint-disable-next-line
      const component = shallow(<Drawer resetLogin={console.log} navigation={{ navigate: console.log }} />);
      expect(component).toMatchSnapshot();
    });
  });
});
