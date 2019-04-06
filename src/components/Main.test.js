import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Main from './Main';

configure({ adapter: new Adapter() });

jest.mock('./Chart');

describe('app', () => {
  it('should match snapshot for initial load', () => {
    const wrapper = mount(<Main />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
  it('should match snapshot for a sequence of 8', () => {
    const wrapper = mount(<Main />);

    wrapper.setState({
      sequence: [8, 4, 2, 1]
    });

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
