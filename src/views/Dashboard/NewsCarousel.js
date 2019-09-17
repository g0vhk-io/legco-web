import React, { useState, useEffect } from 'react';
import news from 'api/news';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators
} from 'reactstrap';

import styles from './NewsCarousel.module.scss';

function NewsCarousel({ history }) {
  const [ activeIndex, setActiveIndex ] = useState(0);
  const [ animating, setAnimating ] = useState(false);
  const [ items, setItems ] = useState([]);
  
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
  useEffect(() => {
    news().then(setItems);
  }, []);
  
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
