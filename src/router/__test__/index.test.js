import React from 'react';
import { shallow } from 'enzyme';
import RouterWrap from '../index';


describe('Layout', () => {
    describe('router', () => {
        let element;
        beforeEach(() => {
            element = <RouterWrap />
        })

        test('renders as expected', () => {
            const component = shallow(element);
            expect(component).toMatchSnapshot();
        })

        test('routes /user', () => {
            const component = shallow(element)
            expect(component.find('Route[path="/user"]').first().props('component')).not.toBeUndefined();
        })

        test('routes /', () => {
            const component = shallow(element)
            expect(component.find('Route[path="/"]').first().props('component')).not.toBeUndefined();
        })
    })
})