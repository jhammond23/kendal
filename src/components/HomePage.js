import React, { useEffect, useRef, useState } from 'react';
import VideoPlayer from './VideoPlayer';
import maxDL from '../media/maxDL4x5.mp4';
import maxHC from '../media/maxHC4x5.mp4';
import maxB from '../media/maxB4x5.mp4';
import maxS from '../media/maxS4x5.mp4';
import HCT from '../media/HCT.png';
import DLT from '../media/DLT.png';
import BT from '../media/BT.png';
import ST from '../media/ST.png';
import Footer from './Footer';
import fiveGameHL from '../media/5gameRBHl.mp4';
import thumbnailSrc from '../media/vidTN.png';


function HomePage() {
  const [isBgVisible, setIsBgVisible] = useState(false);
  const weightRoomSectionRef = useRef(null);
  const [showCard1, setShowCard1] = useState(false);
  const [showCard2, setShowCard2] = useState(false);
  const [showCard3, setShowCard3] = useState(false);
  const [showCard4, setShowCard4] = useState(false);


  const toggleCard = (cardNumber) => {
    setShowCard1(cardNumber === 1 ? !showCard1 : false);
    setShowCard2(cardNumber === 2 ? !showCard2 : false);
    setShowCard3(cardNumber === 3 ? !showCard3 : false);
    setShowCard4(cardNumber === 4 ? !showCard4 : false);
  };

  const videos = [
    {
        id: 1,
        title: 'Max Deadlift',
        src: maxDL,
        description: 'Deadlift - 585lbs 1 rep max',
        thumbnail: DLT
    },
    {
        id: 2,
        title: 'Max Hang Clean',
        src: maxHC,
        description: 'Hang Clean - 335lbs 1 rep max',
        thumbnail: HCT
    },
    {
        id: 3,
        title: 'Max Bench',
        src: maxB,
        description: 'Bench Press - 315lbs 2 rep max',
        thumbnail: BT
    },
    {
        id: 4,
        title: 'Max Squat',
        src: maxS,
        description: 'Squat - 515lbs 5 rep max',
        thumbnail: ST
    }
  ];

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Handle isBgVisible state
    if (weightRoomSectionRef.current.getBoundingClientRect().top < 0) {
      setIsBgVisible(true);
    } else {
      setIsBgVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (weightRoomSectionRef.current.getBoundingClientRect().top < 0) {
        setIsBgVisible(true);
      } else {
        setIsBgVisible(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  const videoRefs = useRef(videos.map(() => React.createRef()));

  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      entry.target.classList.remove('video-fade');
                  } else {
                      entry.target.classList.add('video-fade');
                  }
              });
          },
          { threshold: 0.5 }
      );

      videoRefs.current.forEach((ref, index) => {
          observer.observe(ref.current);
          const textElement = document.querySelector(`[data-text-id="${index + 1}"]`);
          if (textElement) {
              observer.observe(textElement);
          }
      });

      return () => {
          videoRefs.current.forEach((ref, index) => {
              observer.unobserve(ref.current);
              const textElement = document.querySelector(`[data-text-id="${index + 1}"]`);
              if (textElement) {
                  observer.unobserve(textElement);
              }
          });
      };
  }, []);

      return (
     <div className="home-page">
      <section id='home'>
        <div className='dark-cover'>
          <div className='block-1'></div>
        </div>
      </section>
        <section id="weight-room" ref={weightRoomSectionRef}>
        <div className='stat-button-cont'>
                <button className="stat-card-button-1 stat-card-button" onClick={() => toggleCard(1)}>Profile</button>
                {showCard1 && (
                    <ul className='stat-card'>
                        <li>Name: Kendal Hammond</li>
                        <li>Age: 18</li>
                        <li>GPA: 3.5</li>
                        <li>Height: 6'2"</li>
                        <li>Weight: 215lbs</li>
                        <li>Hometown: Shelbina, MO</li>
                        <li>High School: South Shelby R-IV</li>
                        <li>Positions: LB, RB, TE, DE</li>
                        <li>Sports: Football, Basketball, Powerlifitng, Track</li>
                        <li>NCAA ID: 2309124207</li>
                    </ul>
                )}
                <button className="stat-card-button-2 stat-card-button" onClick={() => toggleCard(2)}>Maxing Records</button>
                {showCard2 && (
                    <ul className='stat-card'>
                        <li>Bench Max: 315lbs x 2</li>
                        <li>Squat: 515lbs x 5</li>
                        <li>Deadlift: 585lbs x 1</li>
                        <li>Hang Clean: 335lbs x 1</li>
                        <li>40 YD: 4.59 seconds</li>
                        <li>Vertical: 35"</li>
                        <li>Broad: 9'10"</li>
                        <li>5 x 10 x 5: 4.59 seconds</li>
                    </ul>
                )}
                <button className="stat-card-button-3 stat-card-button" onClick={() => toggleCard(3)}>2023-24 Season Stats</button>
                {showCard3 && (
                    <ul className='stat-card'>
                      <li className='yellow'>UNAN Clarence Cannon Conference OPOY</li>
                        <li>Rushing Total: 1714 yards</li>
                        <li>Average Y/C: 13.7 yards</li>
                        <li>Average Y/G: 199 yards</li>
                        <li>Total Carries: 125</li>
                        <li>Total TDs: 31</li>
                        <li>Average Touches to TD: 4.07 touches/TD</li>
                        <li>Total Tackles: 57</li>
                        <li>Solo Tackles: 32</li>
                        <li>TFL: 14</li>
                    </ul>
                )}
                <button className="stat-card-button-4 stat-card-button" onClick={() => toggleCard(4)}>Career Stats</button>
                {showCard4 && (
                    <ul className='stat-card'>
                        <li>Rushing Total: 4316 yards</li>
                        <li>Average Y/C: 8.6 yards</li>
                        <li>Total Carries: 502</li>
                        <li>Rushing TDs: 53</li>
                        <li>Total TDs: 59</li>
                        <li>Tackles: 139</li>
                    </ul>
                )}
            </div>
            <div className={`coolpic3-background ${isBgVisible ? "visible" : ""}`} />
                <div className="block-2">
            {videos.map((video, index) => (
            <div
                key={video.id}
                className={`b2-v${index + 1}`}
                ref={videoRefs.current[index]}
                >
                {video.description && (
                    <div className="text-top" data-text-id={`${index + 1}`}>
                        <p>{video.description}</p>
                    </div>
                )}
              <div className='video-div'>
                <VideoPlayer video={video} />
              </div>
            </div>
            ))}
            </div>
          </section>
          <section id='rb-highlights'>
            <div className='block-3'></div>
            <div className='block-4'>
                
                <div className='main-high-light'>
                  <span className='main-high-lights-title'>Senior Year Regular Season Highlights ('23 - '24)</span>
                  <div className='center yellow'>Conference Awards: UNAN Clarence Cannon Conference Player of the Year, 1st team all conference RB & Kicker, 2nd team all conference ILB</div>
                  <br/>
                  <iframe src='https://www.hudl.com/embed/video/3/14860462/65392aa096768803a8ec3dde' allowfullscreen></iframe>
                  <br/><br/><br/>
                  <span className='main-high-lights-title'>Senior Year RB Regular Season Highlights ('23 - '24)</span>
                  <iframe src='https://www.hudl.com/embed/video/3/14860462/6537f051066228161834c152' allowfullscreen></iframe>
                  <br/><br/><br/>
                  <span className='main-high-lights-title'>Senior Year LB Regular Season Highlights ('23 - '24)</span>
                  <iframe src='https://www.hudl.com/embed/video/3/14860462/653566fd96760609240c670f' allowfullscreen></iframe>
                  <br/><br/><br/>
                  <span className='main-high-lights-title'>Senior Year Game 7-9 Highlights ('23 - '24)</span>
                  <iframe src='https://www.hudl.com/embed/video/3/14860462/6533fa4b19af4c0968413e43' allowfullscreen></iframe>
                  <br/><br/><br/>
                  <span className='main-high-lights-title'>Senior Year Game 4-6 Highlights ('23 - '24)</span>
                  <iframe src='https://www.hudl.com/embed/video/3/14860462/65182ff364dfa401d400e505' allowfullscreen></iframe>
                  <br/><br/><br/>
                  <span className='main-high-lights-title'>Senior Year Game 1-3 Highlights ('23 - '24)</span>
                  <iframe src='https://www.hudl.com/embed/video/3/14860462/64fd2081e97bbd0608f877d2' allowfullscreen></iframe>
                  <br/><br/><br/>
                  <span className='main-high-lights-title'>Junior Year RB Highlights ('22 - '23)</span>
                  <iframe src='https://www.hudl.com/embed/video/3/14860462/63938196041eef0c480304ff' allowfullscreen></iframe>
                  <br/><br/><br/>
                  <span className='main-high-lights-title'>Junior Year LB Highlights ('22 - '23)</span>
                  <iframe src='https://www.hudl.com/embed/video/3/14860462/643b61bc38634a01500e50d3' allowfullscreen></iframe>
                </div>
                {/*
                <div className='high-light-videos'>
                    <iframe src='https://www.hudl.com/embed/video/3/14860462/630a395564deca08e8c6877d' frameborder='0' allowfullscreen></iframe>
                    <iframe src='https://www.hudl.com/embed/video/3/14860462/6338b46cbed6e5065caf1994' frameborder='0' allowfullscreen></iframe>
                    <iframe src='https://www.hudl.com/embed/video/3/14860462/6390d3f76e815c0648a233cc' frameborder='0' allowfullscreen></iframe>
                    <iframe src='https://www.hudl.com/embed/video/3/14860462/63917afc47982005382d1f95' frameborder='0' allowfullscreen></iframe>
                </div>
                    22-23 Season Stats
                      <ul className='stat-card'>
                        <li>Rushing Total: 1638 yards</li>
                        <li>Average Y/C: 8.07 yards</li>
                        <li>Average Y/G: 136.5 yards</li>
                        <li>Receiving: 240 yards</li>
                        <li>Total Carries: 203</li>
                        <li>Rushing TDs: 17</li>
                        <li>Total TDs: 20</li>
                        <li>Tackles: 65</li>
                    </ul>

                                      <span className='main-high-lights-title'>5 Game RB Highlights ('23 - '24)</span>
                  <video src={fiveGameHL} controls poster={thumbnailSrc}></video>
*/}
            </div>
          </section>
          <Footer />
        </div>
      );
    }
    
    export default HomePage;