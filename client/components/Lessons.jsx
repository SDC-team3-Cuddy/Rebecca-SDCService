import React from 'react';
import styles from '../css/Lessons.module.css';
import LessonPlans from './LessonPlans.jsx';
import Extra from './Extra.jsx';
import Promos from './Promos.jsx';

class Lessons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: '',
      sixtyMinutes: '',
      thirtyMinutes: '',
      plan: '',
    };

    this.handleLesson = this.handleLesson.bind(this);
  }

  handleLesson(e) {
    if (e.target.value === 'Online Lesson') {
      this.setState({
        selectedValue: e.target.value,
        sixtyMinutes: '+ $198.99',
        thirtyMinutes: '+ $99.99',
        plan: e.target.value,
      });
    } else {
      this.setState({
        selectedValue: e.target.value,
        sixtyMinutes: '',
        thirtyMinutes: '',
        plan: e.target.value,
      });
    }
  }

  render() {
    return (
      <>
        <div className={styles.lessonswrap}>
          <div className={styles.signup}> Sign up for guitar lessons </div>
          <div className={styles.lessonstype}>
            <div className={styles.menu}>
              <div className={styles.listitem}>
                <input className={styles.input} onChange={this.handleLesson} type="radio" value="Online Lesson" checked={this.state.selectedValue === 'Online Lesson'} />
                Online Lessons
              </div>
              <div className={styles.listitem}>
                <label>
                  <input type="radio" value="In-Store" onChange={this.handleLesson} checked={this.state.selectedValue === 'In-Store'} />
                </label>
                In-Store Lessons
              </div>
            </div>
          </div>
        </div>
        <LessonPlans plan={this.state.plan} thirty={this.state.thirtyMinutes} sixty={this.state.sixtyMinutes} />
        <Extra />
        <Promos />
      </>
    );
  }
}

export default Lessons;
