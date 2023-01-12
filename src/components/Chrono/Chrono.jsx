import React from 'react'
import './chrono.scss'
import { AiOutlineLine } from 'react-icons/ai'

const Chrono = () => {
  return (
    <section>
      <div className="pf__chrono-container">
        <div className="pf__chrono-container-content">
          <h3 className="pf__title3">
            2021 <AiOutlineLine />
          </h3>
          <p className="pf__paragraph2">
            Première formation en Dev, apprentissage des bases
          </p>
        </div>
        <div className="pf__chrono-container-content">
          <h3 className="pf__title3">
            2022 <AiOutlineLine />
          </h3>
          <p className="pf__paragraph2">
            Formation développeur Web avec Openclassrooms RNCP 5
          </p>
        </div>
        <div className="pf__chrono-container-content">
          <h3 className="pf__title3">
            2023 <AiOutlineLine />
          </h3>
          <p className="pf__paragraph2">
            Recherche d'alterance pour continuer vers un BAC+4/5
          </p>
        </div>
      </div>
    </section>
  )
}

export default Chrono
