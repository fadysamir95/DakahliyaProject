import React , { Component } from 'react';
import './edit.css';
import Nav from '../../../components/nav/nav';
import Example from '../../../components/tabs/tabs';
import "./edit.css"

class Edit extends Component {
    render() {
      return (
        <div className="Edit">
            <Nav />

            <div className="container profilePage edit">
                {/* Header */}
                <div className="profile-header">
                    <h3 className="profile-title mt-50">User Profile Setting</h3>
                    <p className="profile-desc">Manage your profile, complete your profile for having a better chance</p>
                </div>

                {/* Tabs */}
                <div className="mt-30">
                    <Example />
                </div>
            </div>

        </div>
      );
    }
}

export default Edit;