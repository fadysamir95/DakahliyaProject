import React , { Component } from 'react';
import './searchBox.css';

class SearchBox extends Component {
    render() {
        return (
            <div className='searchBox-sec'>

                <div id="overlay"></div>

                <div className="w-100 text">
                    <p>Find the best jobs, Start searching now</p>
                </div>
                
                <div className="w-100 d-flex justify-content-center">
                    <form className="form-inline my-2 my-lg-0">
                        <div className="search-box">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search Jobs Now …" />
                                <a href='#' className='btn btn-primary btn-search'>Search</a>
                                <span className='search-hint'>900 Opened Jobs</span>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="recent">
                    <p className="mr-2">Recent Jobs</p>
                    <span className="tag mr-1">Quality Manager</span>
                    <span className="tag mr-1">Quality Manager</span>
                    <span className="tag mr-1">Quality Manager</span>
                </div>

            </div>
        );
    }
}

export default SearchBox;