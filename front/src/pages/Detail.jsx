import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Detail() {
    const { id } = useParams()
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        getdetail()
    }, []);

    async function getAllDetail(id) {
        const response = await fetch('http://localhost:3000/meryem/' + id);
        const data = await response.json();
        return data

    }

    async function getdetail() {
        let boxs = await getAllDetail(id)
        setDetail(boxs)

    }
    return (
        <div>
            {/* {
        detail.map((x)=>(
          <div key={x._id}>
            <img src={x.image} alt="" />
            <h5>{x.title}</h5>
            <p>{x.price}</p>
          </div>
        ))
      } */}
            <img src={detail.image} alt="" />
            <h5>{detail.title}</h5>
            <p>{detail.price}</p>
        </div>
    )
}

export default Detail
