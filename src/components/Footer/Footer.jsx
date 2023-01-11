import React from 'react'
import './footer.scss'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="pf__section">
      <div className="pf__footer-container">
        <div className="pf__footer-container_content">
          <div className="pf__footer-container_content-mail">
            <h5 className="pf__title2">E-mail:</h5>
            <a className="pf__paragraph2" href="mailto:dyl.vicetne@gmail.com">
              dyl.vicetne@gmail.com
            </a>
          </div>
          <div>
            <p className="pf__paragraph2">
              Slogan genre trop bien le dev j'aime les gens et la vie
            </p>
          </div>
        </div>
        <div className="pf__footer-icons">
          <a>
            <AiFillGithub
              color="white"
              size="2rem"
              cursor="pointer"
              href="https:github.com"
            />
          </a>
          <a>
            <AiFillLinkedin
              color="white"
              size="2rem"
              cursor="pointer"
              href="https:linkedin.com"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
