import { Component } from "react";
import styles from '../styles/Globals.module.css'

class Navbar extends Component {
    render() {
        return (
            <div class={styles.navdiv}>
                <ul class={styles.navigation}>
                    <li><a href="/" class={styles.navtext}>Luther Jensen</a></li>
                    <li><a href="/about" class={styles.navtext}>About</a></li>
                    <li><a href="/projects" class={styles.navtext}>Projects / Work History</a></li>
                    <li><a href="/contact" class={styles.navtext}>Contact</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;