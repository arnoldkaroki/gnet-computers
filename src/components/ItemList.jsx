import React from 'react';
import '../css/ItemList.css'

const ItemList = ({ items }) => {
    return (
        <div className="item-list">
            <h2>Item List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="item">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <span>Price: Ksh.{item.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;