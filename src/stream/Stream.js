import React, { Component } from 'react';
import { Grid, Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class Stream extends Component {

    constructor() {
        super();

        this.state = {
            items: [
                {
                    "OrderSequence": 1480575096138427930,
                    "StreamItemId": "578b2106-560b-4874-5b9e-b9527a055f29",
                    "TargetId": "https://tech.slashdot.org/story/16/11/30/1720202/more-than-1-million-android-devices-rooted-by-gooligan-malware?utm_source=atom1.0mainlinkanon&utm_medium=feed",
                    "Title": "More Than 1 Million Android Devices Rooted By Gooligan Malware",
                    "UserId": "dummy_user_id"
                },
                {
                    "OrderSequence": 1480575095990121350,
                    "StreamItemId": "7f205e4d-cf70-431b-54b4-e04a69adfd92",
                    "TargetId": "https://developers.slashdot.org/story/16/11/30/1730226/sourceforge-introduces-https-support-for-project-websites?utm_source=atom1.0mainlinkanon&utm_medium=feed",
                    "Title": "SourceForge Introduces HTTPS Support For Project Websites",
                    "UserId": "dummy_user_id"
                },
                {
                    "OrderSequence": 1480575095852363299,
                    "StreamItemId": "061ad897-e8e1-4165-40b4-dd1f0e15f73b",
                    "TargetId": "https://hardware.slashdot.org/story/16/11/30/1756241/pc-market-shows-signs-of-recovery?utm_source=atom1.0mainlinkanon&utm_medium=feed",
                    "Title": "PC Market Shows Signs of Recovery",
                    "UserId": "dummy_user_id"
                },
                {
                    "OrderSequence": 1480575095747721183,
                    "StreamItemId": "2f1951c5-199c-4cc8-6c63-aa524a36c36f",
                    "TargetId": "https://news.slashdot.org/story/16/11/30/1856215/trump-will-get-power-to-send-unblockable-mass-text-messages-to-all-americans?utm_source=atom1.0mainlinkanon&utm_medium=feed",
                    "Title": "Trump Will Get Power To Send Unblockable Mass Text Messages To All Americans",
                    "UserId": "dummy_user_id"
                },
                {
                    "OrderSequence": 1480575095602141868,
                    "StreamItemId": "b5ecf3ae-7c33-4442-6d4e-03f2d0c3ddb6",
                    "TargetId": "https://yro.slashdot.org/story/16/11/30/1935236/fbi-to-gain-expanded-hacking-powers-as-senate-effort-to-block-fails?utm_source=atom1.0mainlinkanon&utm_medium=feed",
                    "Title": "FBI To Gain Expanded Hacking Powers as Senate Effort To Block Fails",
                    "UserId": "dummy_user_id"
                },
                {
                    "OrderSequence": 1480575095481743049,
                    "StreamItemId": "273ef72b-a889-4896-5109-c0123700977c",
                    "TargetId": "https://tech.slashdot.org/story/16/11/30/2021228/wielding-their-windows-phones-microsoft-shareholders-grill-ceo-satya-nadella-on-device-strategy?utm_source=atom1.0mainlinkanon&utm_medium=feed",
                    "Title": "Wielding Their Windows Phones, Microsoft Shareholders Grill CEO Satya Nadella On Device Strategy",
                    "UserId": "dummy_user_id"
                },
                {
                    "OrderSequence": 1480575095383450609,
                    "StreamItemId": "d2c140a3-6f5c-491a-4393-5a0f4ed02f92",
                    "TargetId": "https://yro.slashdot.org/story/16/11/30/2042217/uber-wants-to-track-your-location-even-when-youre-not-using-the-app-heres-why?utm_source=atom1.0mainlinkanon&utm_medium=feed",
                    "Title": "Uber Wants To Track Your Location Even When You're Not Using the App, Here's Why",
                    "UserId": "dummy_user_id"
                },
                {
                    "OrderSequence": 1480575095195439460,
                    "StreamItemId": "4e84bee5-2f92-4436-6ec6-75da56011326",
                    "TargetId": "https://hardware.slashdot.org/story/16/11/30/219241/seagate-introduces-external-hard-drive-that-automatically-backs-up-to-amazons-cloud?utm_source=atom1.0mainlinkanon&utm_medium=feed",
                    "Title": "Seagate Introduces External Hard Drive That Automatically Backs Up To Amazon's Cloud",
                    "UserId": "dummy_user_id"
                },
                {
                    "OrderSequence": 1480575095004061996,
                    "StreamItemId": "8477ca42-68db-43c1-6891-19b63a8b19e4",
                    "TargetId": "https://games.slashdot.org/story/16/11/30/2057243/no-mans-skys-steam-page-didnt-mislead-gamers-rules-uk-ad-watchdog?utm_source=atom1.0mainlinkanon&utm_medium=feed",
                    "Title": "No Man's Sky's Steam Page Didn't Mislead Gamers, Rules UK Ad Watchdog",
                    "UserId": "dummy_user_id"
                },
                {
                    "OrderSequence": 1480575094827876027,
                    "StreamItemId": "83d916f6-1f53-4ad8-602d-38892141a726",
                    "TargetId": "https://politics.slashdot.org/story/16/11/30/2127259/reddit-to-crack-down-on-abuse-by-punishing-hundreds-of-toxic-users?utm_source=atom1.0mainlinkanon&utm_medium=feed",
                    "Title": "Reddit To Crack Down On Abuse By Punishing Hundreds of 'Toxic Users'",
                    "UserId": "dummy_user_id"
                },
                {
                    "OrderSequence": 1480575094715554328,
                    "StreamItemId": "459cec74-a210-48b6-79f3-52171fcbc512",
                    "TargetId": "https://yro.slashdot.org/story/16/11/30/2143221/trump-appoints-third-net-neutrality-critic-to-fcc-advisory-team?utm_source=atom1.0mainlinkanon&utm_medium=feed",
                    "Title": "Trump Appoints Third Net Neutrality Critic To FCC Advisory Team",
                    "UserId": "dummy_user_id"
                },
                {
                    "OrderSequence": 1480575094560457042,
                    "StreamItemId": "8ee38ff4-c5d7-4e82-53f8-9bd2fdddf236",
                    "TargetId": "https://yro.slashdot.org/story/16/11/30/2156218/firefox-zero-day-can-be-used-to-unmask-tor-browser-users?utm_source=atom1.0mainlinkanon&utm_medium=feed",
                    "Title": "Firefox Zero-Day Can Be Used To Unmask Tor Browser Users",
                    "UserId": "dummy_user_id"
                },
                {
                    "OrderSequence": 1480575094381060219,
                    "StreamItemId": "9edc06d7-051c-480f-4b7d-05212b5ecb17",
                    "TargetId": "https://tech.slashdot.org/story/16/11/30/2350228/twitters-says-it-will-ban-trump-if-he-breaks-hate-speech-rules?utm_source=atom1.0mainlinkanon&utm_medium=feed",
                    "Title": "Twitters Says It Will Ban Trump If He Breaks Hate-Speech Rules",
                    "UserId": "dummy_user_id"
                },
                {
                    "OrderSequence": 1480575094232252999,
                    "StreamItemId": "1ae7017e-07da-4863-5b64-dfbc9adda0d3",
                    "TargetId": "https://news.slashdot.org/story/16/12/01/0018248/british-film-institute-to-digitize-100000-old-tv-shows-before-they-disappear?utm_source=atom1.0mainlinkanon&utm_medium=feed",
                    "Title": "British Film Institute To Digitize 100,000 Old TV Shows Before They Disappear",
                    "UserId": "dummy_user_id"
                },
                {
                    "OrderSequence": 1480575094017116747,
                    "StreamItemId": "52bf41e4-abee-4520-5e29-1b15da928d4c",
                    "TargetId": "https://news.slashdot.org/story/16/12/01/0039228/google-earths-timelapses-offer-a-32-year-look-at-earths-changing-surface?utm_source=atom1.0mainlinkanon&utm_medium=feed",
                    "Title": "Google Earth's Timelapses Offer a 32-Year Look At Earth's Changing Surface",
                    "UserId": "dummy_user_id"
                }
            ]

        }
    }

    render() {
        var items = this.state.items.map((item) => {
            return (
                <StreamItem key={item.StreamItemId} item={item} />
            );
        });

        return (
            <Grid>
                <Row>
                    <Col md={8} mdOffset={2} xs={12}>
                        {items}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

class StreamItem extends Component {
    render() {
        return (
            <Panel>
                <ListGroup fill>
                    <ListGroupItem><small>Slashdot</small></ListGroupItem>
                    <ListGroupItem>
                        <a href={this.props.item.TargetId} target="_blank">
                            <h4>{this.props.item.Title}</h4>
                        </a>
                    </ListGroupItem>
                </ListGroup>
            </Panel>
        );
    }
}

export default Stream;
