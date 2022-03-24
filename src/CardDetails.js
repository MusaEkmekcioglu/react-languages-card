import React from 'react'

const CardDetails = ({ data, closeimg }) => {
  return (
    <div onClick={() => closeimg(`${data.name}`)} className="col md-6 mt-2 ">
      <div class="card " style={{ width: '8rem' }}>
        {!data.checked ? (
          <>
            <img
              src={data.img}
              style={{ width: '4rem' }}
              class="card-img-top "
              alt="img"
            />

            <h5 class="card-title">{data.name}</h5>
          </>
        ) : (
          <>
            <h6>{data.options[0]}</h6>
            <h6>{data.options[1]}</h6>
            <h6>{data.options[2]}</h6>
          </>
        )}
      </div>
    </div>
  )
}

export default CardDetails
