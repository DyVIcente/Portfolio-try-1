import React from 'react'
import './card.scss'
import { PROJETS } from '../../projets'

const Card = ({}) => {
  return (
    <section className="pf__card-container">
      {PROJETS.map((projet, index) => (
        <div className="container" key={projet.id}>
          <div className="card">
            <figure className="card__thumb">
              <img
                src={projet.image}
                alt={projet.alt}
                className="card__image"
              />
              <figcaption className="card__caption">
                <h2 className="card__title">{projet.title}</h2>
                <img src={projet.logo} alt="" />

                <p className="card__snippet">{projet.snippet}</p>
                <a href="" className="card__button">
                  {projet.button}
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Card
