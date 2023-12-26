import React from 'react'

const Categories = ({filterItems, categories}) => {
    return (
        <div className="btn-container">
            <button className="filter-btn" onClick={() => filterItems("all")}>All</button>
            {categories.map((category)=>{
                return (
                    <button className="filter-btn" onClick={() => filterItems(category)}>{category}</button>
                )
            })}
            
        </div>
    )
}

export default Categories
