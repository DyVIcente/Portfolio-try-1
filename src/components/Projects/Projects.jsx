import React from 'react'
import './projects.scss'
import ProjetCard from '../Card/Card'

const Projects = () => {
  return (
    <section className="pf__projects" id="wgpt3">
      <div className="pf__projects-container">
        <div className="pf__project-title">
          <h1 className="pf__title">Projets :</h1>
        </div>
        <div>
          <ProjetCard />
        </div>
      </div>
      <div
        className="trait"
        style={{ margin: '2rem 0 0 8rem', width: '13rem' }}
      ></div>
      <div className="hero__gradient"></div>
      <div className="hero__gradient2"></div>
    </section>
  )
}

export default Projects
