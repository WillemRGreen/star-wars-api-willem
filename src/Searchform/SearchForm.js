import React, {Component} from 'react';

export default class SearchForm extends Component {
    state={
        searchValue:'',
        searchType:'people'
    }
    render(){
        return(
            <div>
            <label htmlFor="search-bar">Search</label>
            <input value={this.state.searchValue} onChange={(e)=> this.setState({searchValue: e.currentTarget.value})}name="search-bar" id="search-bar"></input>
            <button onClick={(e) => this.props.handleSubmitButton(this.state.searchValue, this.state.searchType)} type="submit" className="search-button">Search</button>
            <label htmlFor="search-type">Search Type</label>
            <select onClick={(e)=> this.setState({searchType: e.currentTarget.value})} name="search-type" id="search-type">
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="films">Films</option>
                <option value="species">Species</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
            </select>
        </div> 
        )
    }
}