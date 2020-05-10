import React , { Component } from 'react';
import './searchBox.css';

class SearchBox extends Component {
    render() {
        return (
            <div className='mt-60 d-flex justify-content-center'>

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
        );
    }
}

export default SearchBox;