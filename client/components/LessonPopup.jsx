import React from 'react';
import styles from '../css/Lessonpopup.module.css';

class LessonPopup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.popup}>
        <div className={styles.popupinner}>
          <div>
            {' '}
            <img onClick={this.props.closePopup} className={styles.close} src="https://image.flaticon.com/icons/png/512/2938/2938566.png" />
            {' '}
          </div>
          <aside className={styles.aside}>
            In‐store lessons are currently unavailable, except in a few select locations. As we reopen in‐store lessons, we have worked diligently with our parents and students to co‐create safety standards and protocols together. Our goal is to ensure our students and instructors stay safe as we continue to provide great musical learning experiences.
          </aside>
          <button className={styles.popbutton} onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default LessonPopup;
