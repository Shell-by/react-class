import React, { Component } from 'react';

class ErrorHanddle extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
        console.log(error, info);
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    에러 발생
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorHanddle;