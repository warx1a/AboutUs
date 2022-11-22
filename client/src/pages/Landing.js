import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import styles from '../styles/Landing.module.css'

class Landing extends Component {
    render () {
        return (
            <>
                <div class={styles.welcome}>
                    <span>Welcome</span>
                </div>
                <div class={styles.abstractdiv}>
                    <p>Ever since I was young, I have always been someone dependable. My programming life consists of this habit, and is how I got into the field. My name is Luther Jensen and programming is my favorite hobby. I have been programming for over 10 years now and have deep experience with creating innovative solutions across a wide variety of computer applications.
                        My passion in life is improving processes to maximize human potential. One of my biggest pet peeves is waiting for something, and I understand that others don't want to wait for things too. Through programming, I have the ability to optimize apps that people use every day.
                        <br></br>
                        I enjoy programming in my free time and am proficient at a variety of languages. This webpage was something that I wrote in my free time and was meant to showcase my knowledge of various technologies and skills. I hope you enjoy it!
                        <br></br>
                        In my professional life, I think of myself as a parachutist, who comes in and betters a team from the start. At all my previous companies, I was able to come in, understand their code and their business needs, and identity places that we could improve for both ourselves and our customers.
                        Doing this type of work is satisfying to me, and I consider it a core part of the programming lifecycle.
                    </p>
                </div>
                <div class="bottombar"></div>
            </>
        );
    }
}

export default Landing;