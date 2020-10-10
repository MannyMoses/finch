import React, { Component } from 'react';
import axios from 'axios';

class DeleteButton extends Component {
    render() {

        const { handleDelete } = this.props
        return (
            <div className="deleteBtn">
                <button className="btn" onClick={handleDelete}>Delete</button>
            </div>
        )
    }
}

export default DeleteButton;