import React, {Component} from 'react';

import styles from '../styles/Contact.module.css'

class Contact extends Component {
    render() {
        return (
            
            <>
                <div class={styles.contactme}>
                    <span>Want to contact me?</span>
                </div>
                <div class={styles.contactboxholder}>
                    <div class={styles.contactbox}>
                        <span>Email me at:</span>
                        <span class={styles.contactinfo}><a href="mailto:luther.jensen98@gmail.com">luther.jensen98@gmail.com</a></span>
                    </div>
                    <div class={styles.contactbox}>
                        <span>Write me a note:</span>
                        <textarea id="txtContactNote" placeholder="Type your note here" rows="5" cols="50"></textarea>
                        <br></br>
                        <button type="button" id="btnSendNote">Send Note</button>
                    </div>
                    <div class={styles.contactbox}>
                        <span>Shoot me a line:</span>
                        <span class={styles.contactinfo}><a href="tel:4026173052">402-617-3052</a></span>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;