import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import styles from './NewsCarousel.module.scss';
const items = [
  {
    src: 'https://static.appledaily.hk/images/e-paper/20190912/large/1568282043_9a4a.jpg',
    altText: '【逆權運動】民主派倡警執勤衝突前讀誓詞被否決 沙田區會主席稱令警「仲失控',
    caption: 'Slide 1',
    url: 'https://hk.news.appledaily.com/local/realtime/article/20190912/60038070?utm_campaign=hkad_social_hk.nextmedia&utm_medium=social&utm_source=facebook&utm_content=link_post&fbclid=IwAR05JYRsZ9Bl9wkyobnW4c2WDGDD2aCvBTAOWTu-KqDzJlsPO89vWMCDAy8',
  },
  {
    src: 'https://static.appledaily.hk/images/e-paper/20190912/large/1568267132_cb88.jpg',
    altText: '【逆權運動】民主派倡警執勤衝突前讀誓詞被否決 沙田區會主席稱令警「仲失控',
    caption: 'Slide 2',
    url: 'https://hk.news.appledaily.com/local/realtime/article/20190912/60036929',
  },
  {
    src: 'https://static.appledaily.hk/images/e-paper/20190912/large/1568264048_beb8.jpg',
    altText: '【李八方online】民建聯敢做唔敢認 民主黨免費借banner位代宣傳「好事」',
    caption: 'Slide 3',
    url: 'https://hk.news.appledaily.com/local/realtime/article/20190912/60036486',
  }
];

function NewsCarousel({ history }) {
  const [ activeIndex, setActiveIndex ] = useState(0);
  const [ animating, setAnimating ] = useState(false);
  
  const onExiting = () => setAnimating(true);
  const onExited = () => setAnimating(false);
  const next = () => {
    if (animating) return;
    setActiveIndex(prev => prev === items.length - 1 ? 0 : prev + 1);
  }
  const previous = () => {
    if (animating) return;
    setActiveIndex(prev => prev === 0 ? items.length - 1 : prev - 1);
  }
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  
  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators className={styles.indicators} items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {items.map((item) => (
        <CarouselItem
          onExiting={onExiting}
          onExited={onExited}
          key={item.src}
        >
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <div className={styles.img} style={{ 'background-image': `url(${item.src})`}}/>
            <div className={styles.caption}>
              <h5>{item.altText}</h5>
              <p>{item.caption}</p>
            </div>
          </a>
        </CarouselItem>
      ))}
    </Carousel>
  );
}

export default NewsCarousel;
