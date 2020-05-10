import React , { Component } from 'react';
import './profile.css';
import Nav from '../../components/nav/nav';
import profileImage from '../../images/profile.jpg';

class Profile extends Component {
    render() {
      return (
        <div className="Profile">
            <Nav />

            <div className="container profilePage">
                {/* Header */}
                <div className="profile-header">
                    <h3 className="profile-title mt-50">User Profile Setting</h3>
                    <p className="profile-desc">Manage your profile, complete your profile for having a better chance</p>
                </div>

                {/* Card */}
                <div className="card mt-40">
                    <div className="card-body d-flex align-items-center">
                        <div>
                            <img src={profileImage} className="rounded-circle mr-4" alt=""/>
                        </div>
                        <div>
                            <h5 className="card-title mr-2">Mohamed Mostafa</h5><span className="location">Cairo, Egypt</span>
                            <p className="card-text">mohamedmostafa@gmail.com</p>
                            <p className="card-text">92 St. Salah Salem</p>
                            <p className="card-text">Computer Engineering</p>
                            <p className="card-text">Faculty of Engineering | Ain Shams</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Profile;