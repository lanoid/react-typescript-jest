import * as React from 'react';
import FunctionalComponent from './FunctionalComponent';
import helper from '../helpers/helper';

interface Props {
    hello: string;
};

export default class Component extends React.Component<Props> {

    static defaultProps: Props = {
        hello: 'world',
    }

    render () {
        const { hello } = this.props;
        const greeting = helper();
        
        return (
            <div>
                <h1>{greeting} {hello}</h1>
                <FunctionalComponent />
            </div>
        )
    }
}