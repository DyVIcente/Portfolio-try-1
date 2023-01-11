import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <section className="pf__section" id="home">
      <div className="pf__section-left">
        <div className="pf__section-left_text">
          <h1 className="pf__title">
            Mes projets, <br /> mes passions :<br />
            le développement web
          </h1>
          <p className="pf__paragraph">
            Bienvenue sur mon portfolio en ligne ! <br /> Je suis un jeune
            développeur web passionné. <br /> j'utilise également d'autres
            technologies modernes comme HTML, CSS et JavaScript pour créer des
            projets fonctionnels et réactifs. <br /> Merci de prendre le temps
            de parcourir mon portfolio et n'hésitez pas à me contacter si vous
            avez des questions ou des projets sur lesquels je pourrais vous
            aider.
          </p>
          <div className="trait"></div>
        </div>
      </div>
      <div>
        <p>image</p>
      </div>
    </section>
  )
}

export default Hero
