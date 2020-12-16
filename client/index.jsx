import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddToCart from './components/addToCart.jsx';
import Description from './components/Description.jsx';
import Questions from './components/Questions.jsx';
import LessonPlans from './components/LessonPlans.jsx';
import styles from './css/index.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      description: '',
      price: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get('/api/values')
      .then((response) => {
        console.log('Response to GET/api/values: ', response.data.rows);
        this.setState({
          results: response.data.rows,
          description: response.data.rows[0].description,
          price: response.data.rows[0].price,
        });
      })
      .catch((error) => {
        console.error('Error in index.jsx GET/api/values: ', error);
      });
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          <AddToCart description={this.state.description} prices={this.state.price} questions={Questions} />
        </div>

      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('ATC'));
