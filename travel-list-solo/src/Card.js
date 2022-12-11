import React from "react"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"


export default function Card(props){
    return (
        <div className="card">
            <img src={props.imageUrl} alt={props.title} className="location--image" />
            <div className="map--info">
                <FontAwesomeIcon icon={faLocationDot} className="location--dot"/>
                <h6 className="country">{props.location}</h6>
                <a href={props.googleMapsUrl} target="_blank" >View on Google Maps</a>
            </div>
            <h2 className="location--name">{props.title}</h2>
            <h5>{props.startDate} - {props.endDate}</h5>
            <p>{props.description}</p>
        </div>
    )
}