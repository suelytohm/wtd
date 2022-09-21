import React, { useEffect, useState } from 'react'
import './Card.css'
import api from "../../services/axios"

export const Card = () => {

    const [activity, setActivity] = useState()
    const [isSending, setIsSending] = useState(false)

    useEffect(() => {
        changeText()
    }, [])

    const changeText = () => {
        api.get('/activity')
        .then((response) => setActivity(response.data))
        .catch((err) => {
            console.error(err)
        })
    }
    const next = () => {
        changeText()
    }


    return (
        <div>
            <div className="container">
                <div className="card">
                    <h1>What to do when you're bored?</h1>
                    <h2>{activity?.activity}</h2>
                    <button onClick={next}>Next</button>
                </div>
            </div>
        </div>
    )
}
