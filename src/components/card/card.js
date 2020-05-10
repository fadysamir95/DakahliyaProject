import React , { Component } from 'react';
import './card.css';

class Card extends Component {
    render() {
        const title = this.props.title;
        const location = this.props.location;
        const period = this.props.period;
        const status = this.props.status;
        const statusIcon = this.props.statusIcon;
        return (
            <div className="card" style={{ width: "100%" }}>
                <a className="card-body" href='#'>
                    <h5 className="card-title">{title}</h5>
                    <div>
                        <span className="card-text">Dakahliya Poultry</span><span className="separator"> | </span><span className="card-text">{location}</span>
                    </div>
                    <div>
                        <span className="card-text">Manager</span><span className="separator"> | </span><span className="card-text">{period}</span>
                    </div>
                    <div>
                        <p className='status'>{status}</p><img src={statusIcon} className='status-icon'/>
                    </div>
                </a>
            </div>
        );
    }
}

export default Card;