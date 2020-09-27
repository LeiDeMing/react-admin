import React from 'react';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import RouterWrap from '../index';

const renderWidthRouter = () => {
    const history = createMemoryHistory()
    return {
        ...render(RouterWrap(history))
    }
}

test('should render the home page', () => {
    const { container } = renderWidthRouter()
    expect(container).not.toBeUndefined()
})