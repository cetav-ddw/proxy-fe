import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateHeader from '../sections/dateheader/DateHeader';
import HeroBanner from '../sections/herobanner/HeroBanner';
import BntNav from '../sections/navbtn/Btn';
import Nav from '../sections/nav/Nav';

import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: false,
      pathVideo: '',
    };
    this.activeBntNav = this.activeBntNav.bind(this);
  }

  componentDidMount() {
    const { pageName } = this.props;
    if (pageName === 'sinestesia') this.setState({ pathVideo: 'sinestesia.mp4' });
    else if (pageName === 'pabellon') this.setState({ pathVideo: 'pabellon.mp4' });
    else if (pageName === 'home') this.setState({ pathVideo: 'main.mp4' });
  }

  activeBntNav() {
    const { activeNav } = this.state;
    this.setState({ activeNav: !activeNav });
  }

  render() {
    const { activeNav } = this.state;
    const { pageName } = this.props;
    const { pathVideo } = this.state;
    return (
      <header className="header">
        {
          pageName === 'obras' || pageName === 'proxy'
            ? (
              <>
                <DateHeader />
                <BntNav toggleNav={activeNav} displayNav={this.activeBntNav} />
                <Nav toggleNav={activeNav} />
              </>
            )
            : (
              <>
                <DateHeader />
                <HeroBanner pathVideo={pathVideo} />
                <BntNav toggleNav={activeNav} displayNav={this.activeBntNav} />
                <Nav toggleNav={activeNav} />
              </>
            )
        }
      </header>
    );
  }
}

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
};


export default Header;
