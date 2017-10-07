import React, { Component } from 'react';
import './App.css';

class Popup extends Component {

    handleClose= () =>{
        this.props.handleClose({keyCode: 27});
    }
    render() {
        return (
            <div className="style_popup" style={this.props.stylePopup}>
                <div className="style_container"  style={this.props.styleContainer}>
                    <p>Hello!</p>
                    <button className="style_close" onClick={this.handleClose}>&times;</button>
                </div>
            </div>
        );
    }

}
export default Popup;

