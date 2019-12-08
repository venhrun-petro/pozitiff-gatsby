import React from 'react'
import styles from './Contact.module.scss'
import contactIcon from '../../../images/graphics/contact_graphic_feature.svg'
import Modal from '../../modal/Modal'
import Form from '../../form/Form'
import Map from '../../google_map/Map'

export default class ContactSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: false };
  }

  toggleModal = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render () {
    return (
      <section className={styles.contactSection} id="contact">
        <div className="container">
          {/* <div className="row">
            <div className="bg_mask" role="dialog"></div>
            <div className="modal_window" role="alert">
              <div className="modal_window_inner">
                <h3 className="modalHeader">Thank you!</h3>
                <p className="modalText">We´ve recived your request and will be in touch</p>
              </div>
              <button clasName="modal_window_closeButton" role="button">X</button>
            </div>
          </div> */}
    
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section__header">
                <h2 className="section__header_title">Contact</h2>
                <img src={contactIcon} alt="section-graphics" className="section__header_image" />
              </div>
            </div>
            <div className="col-12 col-md-10 col-lg-8">
              <Form />
            </div>
          </div>
        </div>

        <div className="App">
          <button onClick={this.toggleModal}>
            Open the modal
          </button>

          <Modal show={this.state.isHidden} onClose={this.toggleModal}>
          </Modal>
        </div>

        <div className="mapContainer">
          <Map isMarkerShown />
        </div>
      </section>
    )
  }
}