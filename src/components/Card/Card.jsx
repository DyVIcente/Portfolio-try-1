import React from 'react'
import './card.scss'
import { PROJETS } from '../../projets'

const Card = ({}) => {
  return (
    <section className="pf__card-container">
      {PROJETS.map((projet, index) => (
        <div className="container" key={projet.id}>
          <div className="image-container">
            <img src={projet.image} alt={projet.alt} className="image-img" />
          </div>
          <div className="card-content">
            <div>
              <h2 className="pf__title2">{projet.title}</h2>
            </div>
            <div className="card-body">
              <p className="pf__paragraph">{projet.snippet}</p>
            </div>
          </div>

          <div className="card-logo">
            <img src={projet.logo} alt="logo_projet" />
          </div>
          <div className="btn">
            <button>
              <a href="" className="pf__paragraph">
                {projet.button}
              </a>
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Card
