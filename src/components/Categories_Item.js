import React from 'react'
import { API_UPLOADIMAGE } from '../services/config'

const Categories_Item = (props)=>{

    return (
        <div className="category-item">
            <img className="category-image" src={`${API_UPLOADIMAGE}/${props.image}`} />
            <div className="category-info">
                <h2 className="info-title">{props.name}</h2>
                <button className="button-category">Xem</button>
            </div>
        </div>
    )
}
export default Categories_Item