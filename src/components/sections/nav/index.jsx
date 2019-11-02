import React, { Component } from 'react';
import { Link } from 'gatsby';
import Button from '../../units/Button';
import './nav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle },() => {
    toggle ? document.body.style.overflow = 'visible' : document.body.style.overflow = 'hidden' ;
    });
  }
  render() {
    const { toggle } = this.state;
    return (
      <>
        <Button handleClickbtn={this.handleClick} variant="btn-nav" id="open">
          <span className="btn-nav__text">{toggle ? 'Cerrar' : 'Menú'}</span>
          <span className="circle-animation">
            <svg className="btn-nav__svg " height="60" width="60">
              <circle
                className="progress-inner"
                cx="35"
                cy="35"
                r="13"
                strokeWidth="4"
                fill="none"
                stroke="#16E024"
              />
            </svg>
          </span>
        </Button>
        <div className={toggle ? 'nav-open' : 'wrapper-nav'}>
          <ul className="nav-list">
            <li className="nav-list__item">
              <Link to="/" className="nav-list__link">
                Inicio
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="/proxy" className="nav-list__link">
                Proxy
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="/sinestesia" className="nav-list__link">
                Sinestesia
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="/pabellon" className="nav-list__link">
                Pabellón/Pavillion
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Nav;
