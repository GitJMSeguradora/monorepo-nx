import '../../setupTests';
import React from 'react';
import { mount } from 'enzyme';
import TagButton from '.';
import { IconWrapper } from './TagButtonStyles';

describe('Render', () => {
  let component;
  const mockClick = jest.fn();
  const mockClear = jest.fn();

  beforeEach(() => {
    component = mount(
      <TagButton
        active
        text="Tag button de teste"
        disabled={false}
        onClick={mockClick}
        onClear={mockClear}
        close
      />
    );
  });
  it('should render correctly', () => {
    expect(component.find('span').text()).toBe('Tag button de teste');
  });

  it('shoud click and trigger onClickHandler', () => {
    component.simulate('click');
    expect(mockClick.mock.calls.length).toEqual(1);
  });

  it('shoud click and trigger onClearHandler', () => {
    component.find(IconWrapper).simulate('click');
    expect(mockClear.mock.calls.length).toEqual(1);
  });
});
