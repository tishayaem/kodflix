import React from 'react';

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: 'Hello, this will be the details page for each Movie & TV show' };
    }

    componentDidMount() {
        setTimeout(
            () => this.setComingSoonMessage(),
            3000
        );
    }

    setComingSoonMessage() {
        this.setState({
            message: 'Coming Soon!'
        });
    }

    render() {
        return (
            <h2>{this.state.message}</h2>
        );
    }
}



