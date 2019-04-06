import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Main from './Main';

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

  it('should not render Music when isPlaying and scaledSequence are falsey', () => {
    const wrapper = shallow(<Main />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
  it('should render Music when isPlaying and scaledSequence are true', () => {
    const wrapper = shallow(<Main />);

    wrapper.setState({
      scaledSequence: [],
      isPlaying: true
    });

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
