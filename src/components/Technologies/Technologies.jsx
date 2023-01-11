import React from 'react'
import { FaReact, FaNode, FaFigma } from 'react-icons/fa'
import './technologies.scss'

const technologies = () => {
  return (
    <section id="possibility">
      <div className="pf__technologies-content">
        <h1 className="pf__title">Technologies</h1>
        <p className="pf__paragraph">
          J'ai travaillé avec de nombreuses technologies, que cela soit en
          Back-End, Front-End ou Design.
        </p>
      </div>
      <div className="wrapper">
        <div className="wrapper__content">
          <div className="wrapper__icon">
            <FaReact color="white" size="25px" />
          </div>
          <div className="wrapper__text">
            <h2 className="pf__title2">Front-End</h2>
            <p className="pf__paragraph2">avec du text</p>
          </div>
        </div>

        <div className="wrapper__content">
          <div>
            <FaNode color="white" size="25px" />
          </div>
          <div>
            <h2 className="pf__title2">Back-End</h2>
            <p className="pf__paragraph2">avec du text</p>
          </div>
        </div>

        <div className="wrapper__content">
          <div>
            <FaFigma color="white" size="25px" />
          </div>
          <div>
            <h2 className="pf__title2">UI/UX</h2>
            <p className="pf__paragraph2">avec du text</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default technologies
