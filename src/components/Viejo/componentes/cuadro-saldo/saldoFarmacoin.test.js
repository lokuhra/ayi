import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SaldoFarmacoin from './saldoFarmacoin';

configure({ adapter: new Adapter() });

describe('Render componente SaldoFarmacoin', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        props = { saldo: '0,00' };
        wrapper = shallow(<SaldoFarmacoin {...props} />)
    })
    it('Deberia mostrar saldo correcto', () => {
        expect(wrapper.find('#saldo').contains('0,00')).toBe(true)
    })
});
