import React from 'react'
import './Styles/StayCard.css';
import {staydata} from './StaysData.js'

const CardListItem = props => {
    return (
        <li>
            <div className="card-list-item">
                <img className='stay-img' src={props.staydata.photo} alt=""/>

                <p className='type-bed-rating-p'>

                {props.staydata.superHost && <span className="super-host">SUPER HOST</span>}

                {props.staydata.type} 

                {props.staydata.beds && <span className="beds"> . {props.staydata.beds} beds</span>}            
                
                <span className='rating-span'>{props.staydata.rating}</span>

                <span className='star material-icons'>star</span>

                </p>
                
                <p className='title-p'>{props.staydata.title}</p>
            </div>
        </li>
        
    );
};

const CardList = () => {
    return(
        <ul style={{listStyleType: "none"}}>
            {staydata.map(staydata => {
                return <CardListItem staydata={staydata} key={staydata.id}/>;
            })}
        </ul>
    );
};

export default function StayCard() {
    return (
        <div className="stay-card">
            <CardList />
        </div>
    );
}