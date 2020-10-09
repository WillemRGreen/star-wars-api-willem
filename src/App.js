import React, {Component} from 'react';
import Header from './Header/Header';
import SearchForm from './SearchForm/SearchForm';
import Results from './Results/Results'
import { waitForDomChange } from '@testing-library/react';

class App extends Component {
  state = {
    display:[],
    error:null
  }

  handleGetResults = (searchValue, searchType) => {
    const url = `https://swapi-thinkful.herokuapp.com/api/${searchType}/?search=${searchValue}`

    fetch(url)
    .then(res =>{
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later')
      }
      return res
    })
    .then(res => res.json())
    .then(data =>{
      let newDisplay = data.results.map(item =>{
        return {names:item.name}
      })
      this.setState({display:newDisplay})
    })
    .catch(err =>{
      this.setState({error:err.message})
      console.log(err)
    })
  }

  render(){
    return (
      undefined
    );
  }
}

export default App;
