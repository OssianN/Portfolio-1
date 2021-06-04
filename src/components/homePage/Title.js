import React, { useState, useLayoutEffect } from 'react'
import './home.scss'
import './nameSpans.scss'

const firstName = 'OSSIAN '
const lastName = 'NÖRTHEN'

const Title = () => {
  const [titleShow, setTitleShow] = useState({})

  const showGlassBackgroundOnDelay = () => {
    setTimeout(() => {
      return setTitleShow({ opacity: '1' })
    }, 6000)
  }

  const removeClassOnDelay = element => {
    setTimeout(() => {
      return element.classList?.remove('change')
    }, 3000)
  }

  const addNeutralClass = element => {
    const containsNeutralClass = element.classList?.contains(
      'name-span--neutral'
    )
    if (!containsNeutralClass) {
      element.classList.add('name-span--neutral')
    }
  }

  const handleNameChange = e => {
    if (!e) return

    addNeutralClass(e.target)
    removeClassOnDelay(e.target)
    e.target.classList.add('change')
    return
  }

  const renderSpans = () => {
    const arr = Array(23).fill(0)
    return arr.map((span, i) => {
      const delay = i / 7 + 1.5
      return (
        <span
          key={i}
          style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
          className=''></span>
      )
    })
  }

  useLayoutEffect(() => {
    showGlassBackgroundOnDelay()
  }, [])

  return (
    <div className='home__glas-container'>
      <div className='home__glas-box' style={titleShow}></div>
      <div className={`nameSpans`} onClick={handleNameChange}>
        {renderSpans()}
      </div>
      <h1 style={{ display: 'none' }}>
        {firstName}
        {lastName}
      </h1>
    </div>
  )
}

export default Title
