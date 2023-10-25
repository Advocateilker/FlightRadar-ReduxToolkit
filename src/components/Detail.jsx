import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { options2 } from '../constants'
import Loading from './Loading';
import { useDispatch } from 'react-redux';
import { setRoute } from '../redux/slices/FlightSlice';

const Detail = ({ closeModal, detailId }) => {

    const dispatch=useDispatch();

    const [d, setDetail] = useState(null);
    useEffect(() => {

        setDetail(null)

        axios.get(`https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`, options2)
            .then((res) => {
                setDetail(res.data)
                dispatch(setRoute(res.data?.trail))
            })
    }, [detailId])


    return (
        <div className='detail-outer'>
            <div className='detail-inner'>
                <p className='close'>
                    <span onClick={closeModal}>X</span>
                </p>
                {!d ? <Loading /> : (
                    <>
                        <h2>{d?.aircraft.model.text}</h2>
                        <h2>{d?.aircraft.model.code}</h2>
                        <p>
                            <span>Tail Number: </span>
                            <span>{d?.aircraft.registration}</span>
                        </p>
                        <img src={d?.aircraft?.images?.large[0]?.src} alt="plane" />
                        <p>
                            <span>Departure: </span>
                            <a target='_blank' href={d?.airport.origin?.website}>{d.airport.origin?.name}</a>
                        </p>
                        <p>
                            <span>Arrival: </span>
                            <a target='_blank' href={d?.airport?.destination?.website}>{d.airport?.destination?.name}</a>
                        </p>

                        <p>
                            <span>Status: </span>
                            <span className='status'
                            style={{background:d.status.icon}}>
                            {d?.status.text}
                            </span>
                        </p>

                    </>
                )
                }
            </div>
        </div>
    )
}

export default Detail