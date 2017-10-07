import React, { Component } from 'react';
import './App.css';
import Popup from './Popup';
import cookies from 'react-cookies';
class OpenModalWindow extends Component {

    constructor(props) {
        super(props);
        if(cookies.load('isOpen',false)){
            this.state = {
                opened:true,
                stylePopup: {
                    transition: "opacity .3s 0s, visibility 0s 0s",
                    visibility: "visible",
                    opacity: "1",
                },
                styleContainer: {
                    transform: "translateY(0px)",
                }
            };
            document.addEventListener('click', this.handleOutsideClick, false);
        } else{

            this.state = {
                opened:false,
                stylePopup: {
                    transition: "opacity .3s 0s, visibility 0s .3s",
                    visibility:  "hidden",
                    opacity:"0",
                },
                styleContainer: {
                    transform: "translateY(-40px)",
                },
            };
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleClose);
    }
  

    setCookies=(opened) => {
        cookies.save('isOpen', opened, { path: '/' });
    }

    handleClose=(e) => {
        const ESC = 27;
        if (e.keyCode === ESC) {
            this.setState({
                    opened: false,
                stylePopup: {
                    transition: "opacity .3s 0s, visibility 0s .3s",
                    visibility: "hidden",
                    opacity: "0",
                },
                styleContainer: {
                    transform: "translateY(-40px)",
                },

            });
            document.removeEventListener('click', this.handleOutsideClick, false);
            this.setCookies(false);
        };

    }
    handleOutsideClick=(e) => {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
            return;
        }
        this.handleClick();
    }
    handleClick=() => {
        if (this.state.opened) {
         this.handleClose({keyCode: 27});

        } else {
            document.addEventListener('click', this.handleOutsideClick, false);
            this.setState({
                opened: true,
                stylePopup: {
                    transition: "opacity .3s 0s, visibility 0s 0s",
                    visibility: "visible",
                    opacity: "1",
                },
                styleContainer: {
                    transform: "translateY(0px)",
                }

            });
            this.setCookies(true);
        };
    }

    render() {
        return (
          <div  className="popover-container" ref={node => { this.node = node; }}>
                <Popup  stylePopup = {this.state.stylePopup}  styleContainer = {this.state.styleContainer} handleClose = {this.handleClose} />
                <button className="my_button" type="button" onClick={this.handleClick}> Окно </button>
          </div>
        );
    }
}

export default  OpenModalWindow;
