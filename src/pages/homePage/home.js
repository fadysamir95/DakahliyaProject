import React , { Component } from 'react';
import './home.css';
import Nav from '../../components/nav/nav';
import SearchBox from '../../components/searchBox/searchBox';
import Card from '../../components/card/card';
import Reject from '../../icons/x-circle.svg';
import Shortlisted from '../../icons/smile.svg';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Nav />
        <SearchBox />
        <div className="container mb-50">
          <p className="sec-title mt-30">My Dashboard</p>
          <p className="sec-desc">Check your latest status of the jobs you have applied on</p>

          <div className="row mt-30">
            <div className="col-md-3">
              <Card title='Quality Manager' location='Giza, Egypt' period='Full-Time' status='Rejected' statusIcon={Reject}/>
            </div>
            <div className="col-md-3">
              <Card title='IT Manager' location='Cairo, Egypt' period='Part-Time' status='Shortlisted' statusIcon={Shortlisted}/>
            </div>
            <div className="col-md-3">
              <Card title='DevOps Engineer' location='Dumiat, Egypt' period='Full-Time' status='Shortlisted' statusIcon={Shortlisted}/>
            </div>
            <div className="col-md-3">
              <Card title='Web Developer' location='Tanta, Egypt' period='Full-Time' status='Pending'/>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-3">
              <Card title='Accountant' location='Dakahlya, Egypt' period='Full-Time' status='Shortlisted' statusIcon={Shortlisted}/>
            </div>
            <div className="col-md-3">
              <Card title='HR Recruiter' location='Gharbya, Egypt' period='Part-Time' status='Rejected' statusIcon={Reject}/>
            </div>
            <div className="col-md-3">
              <Card title='Software Engineer' location='Alexandria, Egypt' period='Full-Time' status='Pending'/>
            </div>
            <div className="col-md-3">
              <Card title='Photographer' location='Suez, Egypt' period='Full-Time' status='Rejected' statusIcon={Reject}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;