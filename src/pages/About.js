import React, {Component} from 'react';
import Safelink from '../components/Safelink';
import styles from '../styles/Aboutus.module.css'

class About extends Component {

    render() {
        return (
            <>
                <div class={styles.pane + " " + styles.lukeinfo}>
                    <div class={styles.name}>Luther Jensen</div>
                    <div class={styles.profilepic}>
                        <img src="/static/Profile3.jpg" alt="Luther Jensen headshot"/>
                    </div>
                    <div class={styles.bio}>
                        <p>
                            Ever wondered what it's like living somewhere most people don't even know exists? That's how I feel about living in Lincoln, Nebraska my whole life.
                            However, I wouldn't consider it a bad thing. Lincoln, like any other medium sized city, has it's ups and downs. I wouldn't trade it for anywhere else in the world.
                            <br></br>
                            Growing up I was always fascinated with computers. How quickly we've evolved them and how much they are able to accomplish was and still is mind boggling to me.
                            Since I was young, my parents have always pushed me to get more interested in technology. My first passion in life was legos, however. I built a replica Eiffel Tower
                            and Taj Mahal, which I still have standing in their basement today. After Legos, my parents signed me up for some electronics classes through my middle school. I enjoyed these,
                            but didn't really enjoy working with electricity.
                            <br></br>
                            Being in middle school, I played a lot of video games. The first video game my parents ever let me play was Runescape. I immediately fell in love with the game. During my summers,
                            the game was my full time job. As I got older though, I didn't have as much time to play the game. One of my friends told me about how you could write a program that would play the game
                            for you and train your skills. I was interested and started looking into it. These scripts were written in Java, which I ended up teaching myself at 14.
                            <br></br>
                            Going into high school I took the first programming course that the school system had ever provided. They taught us Python which is a great introductory programming landing.
                            Through this course I was able to learn more about the theories and logic behind programming that I didn't get through self teaching. I programmed a few basic things in Python, but
                            Java was still my main focus. I wrote a painting software, a chat software, along with writing up GUIs for other people who wrote scripts for Runescape.
                        </p>
                    </div>
                </div>
                <div class={styles.pane + " " + styles.skillpane}>
                    <div class={styles.skills}>
                        <span class={styles.titlebar}>Hobbies/Interests</span>
                        <ul>
                            <li><span>Learning</span></li>
                            <li><span>Reading</span></li>
                            <li><span>Cooking</span></li>
                            <li><span>Programming</span></li>
                            <li><span>Camping</span></li>
                            <li><span>Hiking</span></li>
                            <li><span>Axe Throwing</span></li>
                            <li><span>Economics</span></li>
                            <li><span>Logistics</span></li>
                        </ul>
                    </div>
                    <div class={styles.accomplishments}>
                        <span class={styles.titlebar}>Notable Accomplishments</span>
                        <ul>
                            <li><span>Top 5% graduating class at SCC, with honors</span></li>
                            <li><span>Have recieved several recommendations from previous professors and managers</span></li>
                            <li><span>Former Cornhusker State Games Champion in Karate</span></li>
                            <li><span>Managed services and applications used by hundreds of thousands of people daily</span></li>
                            <li><span>Worked in a variety of companies spanning multiple industries</span></li>
                            <li><span>Managed a team of interns over the summer working on multiple projects</span></li>
                            <li><span>Updated multiple applications to meet modern software practices</span></li>
                            <li><span>Created documentation and diagrams to help businesses better understand their software</span></li>
                        </ul>
                    </div>
                    <div class={styles.links}>
                        <div class={styles.frame}>
                            <div class={styles.link}>
                                <div class={styles.link}>
                                    Resume
                                </div>
                            </div>
                            <div class={styles.iconspot}>
                                <a href="/static/Resume.pdf">
                                    <img src="/static/resume.svg" alt="Link to my resume"/>
                                </a>
                            </div>
                        </div>
                        <div class={styles.frame}>
                            <div class={styles.link}>
                                GitHub
                            </div>
                            <div class={styles.iconspot}>
                                <Safelink
                                    url="https://github.com/warx1a"
                                    linkElement={<img src="/static/github.svg" alt="Link to my Github"/>}
                                />
                            </div>
                        </div>
                        <div class={styles.frame}>
                            <div class={styles.link}>
                                Twitter
                            </div>
                            <div class={styles.iconspot}>
                                <Safelink
                                    url="https://twitter.com/RuthlessLuth"
                                    linkElement={<img src="/static/globe.svg" alt="Link to my Twitter"/>}
                                />
                            </div>
                        </div>
                        <div class={styles.frame + " " + styles.linkedinFrame}>
                            <div class={styles.link}>
                                LinkedIn
                            </div>
                            <div class={styles.iconspot}>
                                <Safelink 
                                url="https://www.linkedin.com/in/luther-jensen-2749a7233/" 
                                linkElement={<img src="/static/LILogotry3.png" alt="Link to my Linkedin"/>}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottombar"></div>
            </>
        );
    }
}

export default About;