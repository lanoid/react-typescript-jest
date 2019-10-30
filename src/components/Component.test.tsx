import * as React from 'react';
import { shallow } from 'enzyme';
import Component from './Component';

describe('Component', () => {
    const year = shallow(<Component />);
    
    it('matches snapshot', () => {
        expect(year).toMatchSnapshot();
    });
});