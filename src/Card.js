import React, { useState } from 'react'
import './Card.css'
import CardDetails from './CardDetails'

const Card = ({ categories }) => {
  const [languageData, setLanguageData] = useState(categories)

  const closeimg = (number) => {
    let newCategories = languageData.map((data) =>
      data.name === number ? { ...data, checked: !data.checked } : data
    )
    setLanguageData(newCategories)
  }

  return (
    <div className="container mt-5 bg-warning rounded w-50 p-3">
      <div className="header">
        <h1>Languages</h1>
      </div>
      <div className="container ">
        <div className="row row-cols-2">
          {/* {categories.map((data) => {
            return (
              <div className="col md-6 mt-2 spesial">
                <div class="card " style={{ width: '8rem' }}>
                  <img
                    src={data.img}
                    style={{ width: '4rem' }}
                    class="card-img-top "
                    alt="img"
                  />

                  <h5 class="card-title">{data.name}</h5>
                </div>
              </div>
            )
          })} */}
          {languageData.map((data, index) => {
            return <CardDetails data={data} key={index} closeimg={closeimg} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Card
