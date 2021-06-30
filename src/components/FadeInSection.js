import React, { useState, useEffect, useRef } from 'react'

const FadeInSection = ({ indexKey, children }) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting))
      },
      { root: null, rootMargin: '0px', threshold: 0.4 }
    )
    observer.observe(domRef.current)
  }, [])

  return (
    <li
      key={indexKey}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}>
      {children}
    </li>
  )
}

export default FadeInSection
