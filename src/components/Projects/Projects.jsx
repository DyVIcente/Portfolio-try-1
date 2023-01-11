import React from 'react'
import './projects.scss'
import Card from '../Card/Card'

const Projects = () => {
  return (
    <section className="pf__projects" id="wgpt3">
      <div className="pf__projects-container">
        <div className="pf__project-title">
          <h1 className="pf__title">Projets :</h1>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </section>
  )
}

export default Projects
