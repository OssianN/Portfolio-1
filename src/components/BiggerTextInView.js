import React, { useState, useEffect, useRef } from 'react'

const BiggerTextInView = ({ className, children }) => {
  const [isVisible, setVisible] = useState(false)
  const viewRef = useRef(null)

  useEffect(() => {
    const viewNodeObject = viewRef.current
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting))
      },
      {
        root: null,
        rootMargin: '-150px',
        threshold: 0.2,
      }
    )

    if (viewNodeObject) {
      observer.observe(viewNodeObject)
    }

    return () => {
      if (viewNodeObject) {
        observer.unobserve(viewNodeObject)
      }
    }
  }, [])

  return (
    <li className={`guestbook__messages-li ${isVisible ? 'is-visible' : ''}`} ref={viewRef}>
      {children}
    </li>
  )
}

export default BiggerTextInView
