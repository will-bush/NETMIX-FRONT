import React from 'react';
import './SearchPage.css';

class SearchPage extends React.Component {

    render() {

        return (
            <div className="searchPage">
                <h1>THIS IS THE ADVANCED SEARCH PAGE</h1>
                <h3>This page should render ALL results returned from the search query</h3>
                <h3>This is in contrast to the home page search, which ONLY renders the most likely result</h3>
            </div>
        )
    }
}

export default SearchPage;