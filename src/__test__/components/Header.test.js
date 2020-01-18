import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('<Header />', () => {
  const provider =
    <ProviderMock>
        <Header />
    </ProviderMock>;

  test('Render', () => {
    const header = shallow(provider);
    expect(header.length).toEqual(1);
  });

  test('Title render', () => {
    const header = mount(provider);
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});
