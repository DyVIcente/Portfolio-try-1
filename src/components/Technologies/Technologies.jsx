import React from 'react'
import {
  FaReact,
  FaNode,
  FaFigma,
  FaCss3Alt,
  FaGithubSquare,
  FaNodeJs,
} from 'react-icons/fa'
import { AiFillGoogleCircle, AiFillHtml5 } from 'react-icons/ai'
import { SiJavascript, SiReact, SiExpress, SiMongodb } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import './technologies.scss'

const technologies = () => {
  return (
    <section id="possibility">
      <div className="hero__gradient3"></div>
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
            <p className="pf__paragraph2">
              Développement avec HTML, CSS, JavaScript et React
            </p>
          </div>
        </div>

        <div className="wrapper__content">
          <div>
            <FaNode color="white" size="25px" />
          </div>
          <div>
            <h2 className="pf__title2">Back-End</h2>
            <p className="pf__paragraph2">
              Développement avec NodeJS, Express et MongoDB
            </p>
          </div>
        </div>

        <div className="wrapper__content">
          <div>
            <AiFillGoogleCircle color="white" size="25px" />
          </div>
          <div>
            <h2 className="pf__title2">Référencement</h2>
            <p className="pf__paragraph2">Référencement SEO et Accéssibilité</p>
          </div>
        </div>

        <div className="wrapper__content">
          <div>
            <FaFigma color="white" size="25px" />
          </div>
          <div>
            <h2 className="pf__title2">UI/UX</h2>
            <p className="pf__paragraph2">Figma</p>
          </div>
        </div>
      </div>
      <div className="wrapper__icons2">
        <AiFillHtml5 className="tech__icons" />
        <FaCss3Alt className="tech__icons" />
        <SiJavascript className="tech__icons" />
        <SiReact className="tech__icons" />
        <FaGithubSquare className="tech__icons" />
        <FaNodeJs className="tech__icons" />
        <SiExpress className="tech__icons" />
        <SiMongodb className="tech__icons" />
        <TbApi className="tech__icons" />
      </div>
    </section>
  )
}

export default technologies
