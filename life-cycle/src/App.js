import React, {Component} from 'react';
import LifeSample from './LifeSample';
import ErrorHanddle from './ErrorHandle';

function getRnadomColor() {
    return '#' + Math.floor(Math.random() + 16777215).toString();
}

class App extends Component {
    state = {
        color : '#000000'
    }

    handleClick = () => {
        this.setState({
            color: getRnadomColor()
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤컬러</button>
                <ErrorHanddle>
                    <LifeSample color={this.state.color}/>
                </ErrorHanddle>
            </div>
        );
    }
}

export default App;
