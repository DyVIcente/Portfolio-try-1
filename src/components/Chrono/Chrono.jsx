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
          <p className="pf__paragraph2">Oupsi douspi lemon squeezi and biche</p>
        </div>
        <div className="pf__chrono-container-content">
          <h3 className="pf__title3">
            2022 <AiOutlineLine />
          </h3>
          <p className="pf__paragraph2">Oupsi douspi lemon squeezi and biche</p>
        </div>
        <div className="pf__chrono-container-content">
          <h3 className="pf__title3">
            2023 <AiOutlineLine />
          </h3>
          <p className="pf__paragraph2">Oupsi douspi lemon squeezi and biche</p>
        </div>
      </div>
    </section>
  )
}

export default Chrono
