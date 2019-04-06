import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Controls from './Controls';

describe('controls', () => {
  const props = {
    sequence: [],
    wave: 'sine',
    isPlaying: false,
    handleCollatz: jest.fn(),
    handleWave: jest.fn(),
    handleRepeat: jest.fn()
  }
  
  let wrapper = mount(<Controls {...props} />);
  
  it('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
  it('should render playing spinner if isPlaying is true', () => {
    props.isPlaying = true;

    wrapper = mount(<Controls {...props} />);

    expect(wrapper.find('Loader').length).toBe(1);
  });
  
  it('should render Arrows if sequence.length is true', () => {
    props.sequence = [1];

    wrapper = mount(<Controls {...props} />);

    expect(wrapper.find('Arrows').length).toBe(1);
  });
});