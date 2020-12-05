import React from 'react';
import styles from '../css/LessonPlans.module.css';
import LessonPopup from './LessonPopup.jsx';

class LessonPlans extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lessonPop: false,
      thirtyPop: false,
    };

    this.handlePop = this.handlePop.bind(this);
    this.handleThirty = this.handleThirty.bind(this);
  }

  handleThirty() {
    if (this.props.plan === 'In-Store') {
      this.setState({
        lessonPop: false,
        thirtyPop: !this.state.thirtyPop,
      });
    }
  }

  handlePop() {
    if (this.props.plan === 'In-Store') {
      this.setState({
        lessonPop: !this.state.lessonPop,
        thirtyPop: false,
      });
    }
  }

  render() {
    return (
      <div className={styles.lessonplan}>
        <div className={styles.lesson60}>
          <button onClick={this.handlePop} className={styles.lessonsplanbutton}>
            <div> Add four 60 minute lessons </div>
            <div className={styles.lesson}>
              {' '}
              {this.props.sixty}
            </div>
          </button>
          {this.state.lessonPop ? <LessonPopup sixtyProp={this.props.sixty} closePopup={this.handlePop.bind(this)} /> : null }
        </div>
        <div className={styles.lesson30}>
          <button onClick={this.handleThirty} className={styles.lessonsplanbutton}>
            <div> Add four 30 minute lessons </div>
            <div className={styles.lesson}>
              {' '}
              {this.props.thirty}
              {' '}
            </div>
          </button>
          {this.state.thirtyPop ? <LessonPopup closePopup={this.handleThirty.bind(this)} /> : null }
        </div>
        <div className={styles.nothanks}>
          <button className={styles.lessonsplanbutton}>
            No thanks
          </button>
        </div>
      </div>
    );
  }
}

export default LessonPlans;
