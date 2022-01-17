import React, { useState, useEffect} from "react"
import "./styles.css"
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { Link } from "react-router-dom"
import {  toast } from 'react-toastify';

const Activation = (props)=>{
    
    const {activation_token} = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')
    const axiosinstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL});

    useEffect(() => {
        if(activation_token){
            const activationEmail = async () => {
                try {
                    const res = await axiosinstance.post(`http://31.220.48.248/activation/${activation_token}`)
                    setSuccess(res.data.msg)
                } catch (err) {
                    err.response.data.msg && setErr(err.response.data.msg)
                }
            }
            activationEmail()
        }
    },[activation_token])

    return (
        <div className="active_page">
            {err && toast.error(err)}
            {success && toast.success(success)}
        </div>
    )
}

export default Activation