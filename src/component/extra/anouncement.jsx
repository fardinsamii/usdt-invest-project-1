// Announcement.js
import React, { useEffect, useState } from 'react';
import  "../../assets/css/anouncement.css";

const Announcement = () => {
    const messages = [
        ` <p class="mb-0">Welcome to join "Mueller Group"</p>
          <p class="mb-0">Mueller Group's latest investment project is now open to individual users. Anyone can do it at any time</p>
          <p class="mb-0">Participate in investment and withdrawal, open 24 hours a day.</p>
          <h5 class="color-red">Global registration link: https://mmggll8899-usdt.vip</h5>
          <h5 class="color-red">Investment consultation Telegram customer service: https://t.me/Mueller_USDT</h5>
          <h5 class="color-yellow">We solemnly promise that this platform will never close! We are a safe and reliable platform to ensure the safety of everyone’s funds</h5>
          <p class="mb-0">Müller is a German company that produces a variety of dairy products and is headquartered in Fischach, Bavaria, Germany. In addition to its home market in Germany, Müller is active in various markets in Europe and beyond. For example, it is one of the best-selling yogurt brands in the UK.</p>
          <p class="mb-0">Launched on July 28, 2024, users can help merchants increase sales and product awareness online in just a few minutes a day, and earn generous commissions.</p>
          <p class="mb-0">What terms and conditions should I pay attention to when joining Mueller Group?</p>
          <p class="mb-0">1: All users around the world can participate! All funds are monitored and managed by Deutsche Bank.</p>
          <p class="mb-0">2: Deposit investment can only use USDT or TRX currency, and choose TRC20 or BEP20 network.</p>
          <p class="mb-0">3: The usage period of each level is 60 days</p>
          <p class="mb-0">4: There is no time limit for withdrawals, and withdrawals will be credited to your account within 1-3 minutes.</p>
          <p class="mb-0">5: Task reset, members can upgrade multiple VIPs on the same day</p>
          <p class="mb-0">Mueller Group’s work benefits and user base rewards are as follows:</p>
          <p class="mb-0">Different subscription orders will generate different profits</p>
          <p class="mb-0">Order-01 Subscription amount 9 USDT, commission for the day 4 USDT</p>
          <p class="mb-0">Order-02 Subscription amount 37 USDT, commission for the day 18 USDT</p>
          <p class="mb-0">Order-03 Subscription amount 129 USDT, commission for the day 70 USDT</p>
          <p class="mb-0">Order-04 Subscription amount 369 USDT, commission for the day 216 USDT</p>
          <p class="mb-0">Order-05 Subscription amount 889 USDT, commission for the day 556 USDT</p>
          <p class="mb-0">Order-06 purchase amount 2899 USDT, commission for the day 2062 USDT</p>
          <p class="mb-0">Order-07 purchase amount 6899 USDT, commission for the day 5298 USDT</p>
          <p class="mb-0">Order-08 purchase amount 12899 USDT, commission for the day 10899 USDT</p>
          <p class="mb-0">Order-09 purchase amount 28899 USDT, commission for the day 30099 USDT</p>
        `,
        `
        <p class="mb-0">While making money every day, don’t forget to share your [invitation link] with your friends to earn additional commissions. The more users you share, the more money you make!</p>
        <p class="mb-0">Get VIP for free:</p>
        <p class="mb-0">Invite 3 A-level people to recharge - you will get VIP1</p>
        <p class="mb-0">Invite 3 A-level people to recharge VIP2 - you can get VIP2</p>
        <p class="mb-0">Invite 3 A-level people to recharge VIP3 - you can get VIP3</p>
        <p class="mb-0">Invite friends, members, and relatives to join and you can get level 3 high commissions (10% 2% 1%)</p>
        <p class="mb-0">A: If a subordinate user deposits 1,000 USDT, you will receive a commission of 10% (100 USDT).</p>
        <p class="mb-0">B: If A’s subordinate deposits 1,000 USDT, you will receive a commission of 2% (20 USDT).</p>
        <p class="mb-0">C: If B’s subordinate deposits 1,000 USDT, you will receive a commission of 1% (10 USDT).</p>
        <p class="mb-0">Conclusion: If you are level A, you can get a commission of (A+B+C) 10+2+1+=13%.</p>
        <p class="mb-0">Expand your team, double rewards, invite more friends to join, and make money together!</p>
        <p class="mb-0">Open the platform APP, click "Team" to view your team's stored value, and when you reach the team reward, you can receive USDT rewards.</p>
        <p class="mb-0">Team recharge to get extra rewards immediately for 24 hours:</p>
        <p class="mb-0">$- Members who deposit 500 USDT within 24 hours will receive an additional reward of 30 USDT.</p>
        <p class="mb-0">$ - Members who deposit 1,000 USDT within 24 hours will receive an additional reward of 100 USDT.</p>
        <p class="mb-0">$ - Members who deposit 3,000 USDT within 24 hours will receive an additional bonus of 450 USDT.</p>
        <p class="mb-0">$ - Members who deposit 7,000 USDT within 24 hours will receive an additional reward of 1,400 USDT.</p>
        <p class="mb-0">$ - Members who deposit 15,000 USDT within 24 hours will receive an additional reward of 4,500 USDT.</p>
        <p class="mb-0">$ - Members who deposit 30,000 USDT within 24 hours will receive an additional reward of 15,000 USDT.</p>
        <p class="mb-0">Note: If you meet the conditions, please contact customer service within 24 hours to claim the reward. Bonuses can be claimed immediately or multiple times. The more people who recommend your invitation code link, the greater the reward will be!</p>
        <h5 class="color-red">Global registration link: https://mmggll8899-usdt.vip</h5>
        <h5 class="color-red">Consult Telegram customer service for details: https://t.me/Mueller_USDT</h5>
        `
    ];

    const [show, setShow] = useState(false);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        // Show the announcement after 2 seconds
        const showTimeout = setTimeout(() => {
            setShow(true);
        }, 2000);

        // Clear timeout if the component unmounts
        return () => {
            clearTimeout(showTimeout);
        };
    }, []);

    const handleClose = () => {
        setShow(false);
    };

    const handleNext = () => {
        setCurrentMessageIndex(prevIndex => prevIndex + 1);
    };

    const handlePrevious = () => {
        setCurrentMessageIndex(prevIndex => prevIndex - 1);
    };

    const handleAgree = () => {
        setShow(false);
    };

    return (
        <div className={`announcement ${show ? 'show' : ''}`}>
            <div className="anouncement_title">
                <h4>Announcement</h4>
            </div>
            <div 
                className="message-content"
                dangerouslySetInnerHTML={{ __html: messages[currentMessageIndex] }}
            />
            <div className="buttons">
                {currentMessageIndex === 0 && <button onClick={handleClose}>Close</button>}
                {currentMessageIndex > 0 && <button onClick={handlePrevious}>Previous</button>}
                {currentMessageIndex === 0 && <button onClick={handleNext}>Next</button>}
                {currentMessageIndex === 1 && <button onClick={handleAgree}>Agree</button>}
                
            </div>
        </div>
    );
};

export default Announcement;