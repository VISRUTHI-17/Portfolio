import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faH } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
           A diligent and tech enthusiastic, ambitious one to join as a Software Developer to provide best solutions and quality products for the development of society.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            My ultimate goal is to provide solutions for the society using my skills.
          </p>
        </div>
       <div className='skills1'>
         <div className='skills'>
            <FontAwesomeIcon className='logo43' icon={faHtml5} color={"orange"}/>
            <FontAwesomeIcon className='logo43' icon={faCss3} color={"lightblue"}/>
            <FontAwesomeIcon className='logo43' icon={faReact} color={"lightblue"}/>
        </div>
       </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
