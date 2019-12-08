import React from 'react'
import axios from 'axios';
import styles from './Form.module.scss'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      company: '',
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    // console.log('A name was submitted: ' + this.state.username);
    // console.log('A email was submitted: ' + this.state.email);
    // console.log('A company was submitted: ' + this.state.company);
    // console.log('A content was submitted: ' + this.state.content);

    //data creation
    let discordData = {};
    discordData.username = this.state.username;
    discordData.embeds = [{
      'fields': [
        {
          "name": "**Sender's name:** ",
          "value": this.state.username,
          "inline": false
        },
        {
          "name": "**Sender's organization:** ",
          "value": this.state.company,
          "inlise": false
        },
        {
          "name": "**Sender's email:** ",
          "value": this.state.email,
          "inline": false
        }
      ],
      "title": "New Message Received :incoming_envelope:"
    }];
    discordData.content = this.state.content;
    let jsonString = JSON.stringify(discordData, null, 2);

    //axios request
    axios ({
      method: 'post',
      url: 'https://discordapp.com/api/webhooks/515212551034896413/WkQ12kbvQrGQvuwxi05yEkoEhgzr2mNOPkdqGruZ5EXNYtXOpFbg23QLDIU55T6zPn0S',
      data: jsonString,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className={styles.form_wrapper}>
        <form className="contactForm" id="contactForm" onSubmit={this.handleSubmit}>
          <div className={styles.contactForm_group}>
            <label className={styles.contactForm_group_label} htmlFor="name">First Name</label>
            <input className={styles.contactForm_group_field} type="text" name="username" id="name" onChange={this.handleChange} placeholder="Name" required/>
          </div>
          <div className={styles.contactForm_group}>
            <label className={styles.contactForm_group_label} htmlFor="mail">Email</label>
            <input className={styles.contactForm_group_field} type="email" name="email" id="mail" onChange={this.handleChange} placeholder="Email" required/>
          </div>
          <div className={styles.contactForm_group}>
            <label className={styles.contactForm_group_label} htmlFor="company">Company</label>
            <input className={styles.contactForm_group_field} type="text" name="company" id="company" onChange={this.handleChange} placeholder="Company" required/>
          </div>
          <div className={styles.contactForm_group_textarea}>
            <label className={styles.contactForm_group_label} htmlFor="textarea">Message</label>
            <textarea className={styles.contactForm_group_field} name="content" id="textarea" rows="10" onChange={this.handleChange} placeholder="Message" required></textarea>
          </div>
          <div className={styles.contactForm_button}>
            <button className={styles.subsmitButton} type="submit">Send</button>
          </div>
        </form>
      </div>
    );
  }
}