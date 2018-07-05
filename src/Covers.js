import React from 'react';


export default class Covers extends React.Component {
    render() {
        return (
        <div className='item'>
            <img src={this.props.image} alt='' />
            <div className='item-overlay'>
                <h1>{this.props.title}</h1>
            </div>
        </div>
        )
    }
}