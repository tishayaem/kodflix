import React from 'react';
import {Link} from 'react-router-dom';
export default class Cover extends React.Component {
    render() {
        return (
            <Link to={`${this.props.type}/${this.props.id}`} className='item'>
                <img src={this.props.image} className="cover" alt=""/>
                <div className='item-overlay'>
                    <h1>{this.props.title}</h1>
                </div>
            </Link>
        )
    }
}