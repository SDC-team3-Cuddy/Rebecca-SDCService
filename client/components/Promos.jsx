import React from 'react';
import styles from '../css/Promos.module.css';
import Popup from './Popup.jsx';
import InternationalPopup from './International.jsx';
import ProtectPopup from './ProtectPopup.jsx';

class Promos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showShipping: false,
      showProtect: false,
      showInt: false,
    };

    this.handleShip = this.handleShip.bind(this);
    this.handleInternational = this.handleInternational.bind(this);
    this.handleProtect = this.handleProtect.bind(this);
  }

  handleShip(e) {
    this.setState({
      showShipping: !this.state.showShipping,
      showInt: false,
      showProtect: false,
    });
  }

  handleProtect(e) {
    this.setState({
      showProtect: !this.state.showProtect,
      showInt: false,
      showShipping: false,
    });
  }

  handleInternational(e) {
    this.setState({
      showInt: !this.state.showInt,
      showShipping: false,
      showProtect: false,
    });
  }

  render() {
    return (
      <>
        <ul className={styles.Promocontainer}>
          <li className={styles.headphoneswrapper}>
            <span className={styles.anchor}>
              {' '}
              <img className={styles.headphones} src="https://img.flaticon.com/icons/png/512/27/27130.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" />
              {' '}
            </span>
            <a className={styles.actual} onClick={this.handleProtect}>
              {' '}
              <span className={styles.protect} value="Protect"> Protect Your Gear </span>
              {' '}
            </a>
            {this.state.showProtect
              ? (
                <ProtectPopup
                  closePopup={this.handleProtect.bind(this)}
                />
              )
              : null}
          </li>

          <li className={styles.sometext}>
            <span className={styles.anchor} value="Free shipping">
              {' '}
              <img className={styles.shipping} src="https://image.flaticon.com/icons/png/512/44/44266.png" />
              {' '}
            </span>
            <a className={styles.actual} onClick={this.handleShip} target="Free Shipping">
              {' '}
              <span className={styles.free} value="Free Shipping"> Free Shipping </span>
              {' '}
            </a>
            {this.state.showShipping
              ? (
                <Popup
                  closePopup={this.handleShip.bind(this)}
                />
              )
              : null}
          </li>
          <li className={styles.international}>
            <span className={styles.anchor}>
              {' '}
              <img className={styles.internationalicon} src="https://image.flaticon.com/icons/png/128/558/558593.png" />
              {' '}
            </span>
            <a className={styles.actual} onClick={this.handleInternational}>
              {' '}
              <span className={styles.intshipping} value="International"> International Shipping </span>
              {' '}
            </a>
            {this.state.showInt
              ? (
                <InternationalPopup
                  closePopup={this.handleInternational.bind(this)}
                />
              )
              : null}
          </li>
        </ul>
        <div>
          <img className={styles.rogue} src="https://static.guitarcenter.com/derivates/20/002/1/DV030_Jpg_BrandLogo_1000_rogue.jpg" />
        </div>
      </>
    );
  }
}

export default Promos;
