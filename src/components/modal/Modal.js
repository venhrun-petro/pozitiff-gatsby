import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="row">
        <div className="bg_mask" role="dialog"></div>
        <div className="modal_window" role="alert">
          {this.props.children}
          <div className="modal_window_inner">
            <h3 className="modalHeader">Thank you!</h3>
            <p className="modalText">We´ve recived your request and will be in touch</p>
          </div>
          <button className="modal_window_closeButton" onClick={this.props.onClose}>X</button>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;