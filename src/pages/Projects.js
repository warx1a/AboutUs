import React, {Component} from 'react';
import Safelink from '../components/Safelink';

import styles from '../styles/Projects.module.css'

class Projects extends Component {
    render() {
        return (
            <>
                <div class={styles.project}>
                    
                    <span class={styles.projecttitle}>
                        <Safelink linktext="Spreetail" url="https://www.spreetail.com/"/>
                    </span>
                    <div class={styles.projectinfo}>
                        <div class={styles.projectdesc}>
                            During my brief time at Spreetail my main job focus was to identify and optimize bugs in our processes. My team was responsible for maintaining our applications related to customer experience. Through this work, my team translated business rules related to returns and refunds into programmable logic.
                            I worked as our on-call point person during part of my time to be one of the head people our reps would go to for identifying bugs.
                        </div>
                        <div class={styles.jobinfo}>
                            <span class={styles.featurestitle}>Job Features</span>
                            <ul>
                                <li>Maintained a set of APIs related to Customer Experience</li>
                                <li>Helped build and maintain our main page to handle customer interactions with our reps</li>
                                <li>Created and maintained Azure App configs, secrets, and instances</li>
                                <li>Built and maintained CI/CD pipelines</li>
                                <li>Identified and troubleshooted bugs that came up</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class={styles.project}>
                    <span class={styles.projecttitle}>
                        <Safelink linktext="Sandhills Global" url="https://www.sandhills.com/"/>
                    </span>
                    <div class={styles.projectinfo}>
                        <div class={styles.projectdesc}>
                            I worked at Sandhills Global for a little over three years. During my time there I learned a lot about C#, VisualBasic, the .NET framework, and Windows Services.
                            I worked to maintain a set of APIs we had that managed data relating to specs on equipment we sold. I worked with both our data entry team to maintain the entegrity of the data they entered, and worked with our listing management team to verify that we were showing the correct data to our customers.
                            I built and maintained a Windows Service that would pull in data change requests to process. This required a service w/ 24/7 uptime and the ability to process multiple changes simultaneously.
                        </div>
                        <div class={styles.jobinfo}>
                            <span class={styles.featurestitle}>Job Features</span>
                            <ul>
                                <li>Built and maintained multiple webpages and APIs using react and .NET</li>
                                <li>Maintained a database of interconnected tables using SQL Server</li>
                                <li>Identified and troubleshooted bugs that occurred</li>
                                <li>Mentored a few interns we hired on for the summer</li>
                                <li>Translated business rules and decisions into actionable programming steps</li>
                                <li>Created and maintained documentation to help us communicate w/ business partners</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class={styles.project}>
                    <span class={styles.projecttitle}>Arbitrage Trader</span>
                    <div class={styles.projectinfo}>
                        <div class={styles.projectdesc}>
                            This project is still in it's infancy but is notable to mention. I got interested in the crypto craze back around 2014, when Bitcoin was first mentioned. At the time I was mining BTC on my graphics card.
                            How crypto transactions are facilitated has always interested me, as exchanges are mainly verified through mathematical authenticity. With the rise in crypto trading platforms I was interested in viewing the market data behind this, and using common Wall Street methodologies to quantify crypto exchanges.
                            This project runs as a Windows Service that is 24/7 receiving new trade information from multiple exchanges. Using this data, I am able to construct a live composite order book.
                            I am currently in the process of adding more metrics to base these data points off of, along with adding a more user friendly webpage to interact with.
                        </div>
                        <div class={styles.featuresandreqs}>
                            <div class={styles.features}>
                                <span class={styles.featurestitle}>Features</span>
                            </div>
                            <ul>
                                <li>Capture live trade info from multiple exchanges</li>
                                <li>View order book strength</li>
                                <li>View incoming buy/sell offers alongside order book depth</li>
                                <li>Identify fraudulent crypto transactions</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class={styles.project}>
                    <span class={styles.projecttitle}>Tribal Wars Auto Attacker</span>
                    <img class={styles.appPreviewImg} src="/static/TWPremFarm.png" alt="Troop attack report on villages"/>
                    <div class={styles.projectinfo}>
                        <div class={styles.projectdesc}>
                            The original reason I built out this programming was due to the amount of time it takes to send out farming attacks from each of your villages. At the time I wrote this I had about 35 villages to manage, which took about 40 minutes to send farming runs from all villages.
                            By writing this script, I was able to automate sending out these attacks. This also helped reduce fatigue on myself, and would be able to send out all available troops from start to finish in about 30 mins.
                            This program will auto-attack villages for you using your troops. It will cycle between the villages you own as troops are exhausted. Using this script, I was able to net over 250m resources of each type on this game. This script relies on a Chrome Extension I built out to run and is semi-configurable.
                            The script is able to send you text notifications if you get back a notable haul, your hourly plundering stats, and if any anti-bot measures are seen.
                        </div>
                        <div class={styles.featuresandreqs}>
                            <div class={styles.features}>
                                <span class={styles.featurestitle}>Features</span>
                                <ul>
                                    <li>Auto-attack with available troops. Will skip if village has none available</li>
                                    <li>Text notifications of CAPTACHA's, and can reply to solve</li>
                                    <li>Text notifications of progress (configurable)</li>
                                    <li>Collect millions of resources</li>
                                    <li>Used as Google Chrome extension</li>
                                </ul>
                            </div>
                            <div class={styles.features}>
                                <span class={styles.featurestitle}>Requirements</span>
                                <ul>
                                    <li>Tribal Wars Premium Account</li>
                                    <li>Tribal Wars Farming Tool</li>
                                    <li>Google Chrome</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class={styles.project}>
                    <span class={styles.KAWtitle}>Kingdoms At War Ally Analyzer</span>
                    <img class={styles.appPreviewImg} src="/static/KAWAllies.jpg" alt="Hiring screen for allies in game"/>
                    <div class={styles.projectinfo}>
                        <div class={styles.projectdesc}>
                            My inspiration for this app came because there were many "Ally Shops" in KaW who were always flipping allies quickly, and always seemed to be able to find the allies w/ the best value for their stats.
                            Using some basic financial metrics, I calculated values based on an ally's hire price versus the stats they offered. I would take the best results and buy those allies. Through this, I made over 3T in game. I was also a well known ally shop for a period of time.
                            This program analyzes Kingdoms At War allies and calulates the best composite score as a ratio of stats to price of the ally. Guaranteed to flip allies quickly and at a great profit. Don't be stuck with overpriced stats!
                            Since it ran as a mobile app. KaW's API relies on your account's Facebook auth token to return results. I was able to capture this token and reverse engineered KaW's API to figure out how to get this data.
                            Programming this took some reverse engineering on my part. This was my first time attempting to directly revese engineer a game's API. I would not repeat this again, however, as the game developers caught on.
                        </div>
                        <div class={styles.featuresandreqs}>
                            <div class={styles.features}>
                                <span class={styles.featurestitle}>Features</span>
                                <ul>
                                    <li>Buy best stat allies at the cheapest price</li>
                                    <li>Optimize your strategy for defense/plunder/money making</li>
                                    <li>Flip allies quickly, almost always within a day</li>
                                    <li>Get many underpriced allies</li>
                                </ul>
                            </div>
                            <div class={styles.features}>
                                <span class={styles.featurestitle}>Requirements</span>
                                <ul>
                                    <li>Kingdoms at War</li>
                                    <li>MySQL database</li>
                                    <li>Facebook Kingdoms at War API key</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Projects;