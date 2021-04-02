import React, { useState, useEffect, useRef } from 'react';

const BiggerTextInView = props => {
  const [isVisible, setVisible] = useState(false);
  const viewRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    }, { root: null, rootMargin: '-150px', threshold: 0.2 });

    if(viewRef.current) observer.observe(viewRef.current);

    return () => {
      if(viewRef.current) observer.unobserve(viewRef.current);
    }
  }, []);

  return (
    <li
      className={isVisible ? 'is-visible' : ''}
      ref={viewRef}>
      {props.children}
    </li>
  );
}

export default BiggerTextInView;