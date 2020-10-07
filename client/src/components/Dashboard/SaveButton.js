import React, { Component } from 'react';

class SaveButton extends Component {
    render() {
        const { handleClick } = this.props
        return (
            <div className="saveBtn">
                <button className="btn" onClick={handleClick}>Save</button>
            </div>
        )
    }
}

export default SaveButton;