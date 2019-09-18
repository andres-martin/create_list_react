import React, { Component } from 'react';

/// Mostrar una lista en base a un arreglo
// todo codigo JS debe ir en {} en JSX HTML

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['Javascript', 'CSS', 'HTLM', 'React']
    }
  }
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Las tecnologias del Front</h1>
        <ul style={styles.list}>
          {this.state.list.map((li) => <li key={li}>{li}</li>)}
        </ul>
      </div>
    );
  }
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: '100px'
  },
  list: {
    fontSize: '20px',
    flexGrow: 6
  }
}

export default App;
