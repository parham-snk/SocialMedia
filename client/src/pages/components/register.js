import React, { useState } from "react";
import axios from 'axios'


const Register = () => {
    const [username, setusername] = useState()
    const [mail, setMail] = useState()
    const [password, setPassword] = useState()

    const submit = () => {
        axios.post('http://localhost:8080/auth/register', {
            username, mail, password
        }).then(res => res.data).then(status => status ? alert('user added') : alert('faild'))
    }
    return (
        <div>
            <form >
                <input type="text" onChange={e => { setusername(e.target.value) }} placeholder="username" />
                <input type="mail" onChange={e => { setMail(e.target.value) }} placeholder="mail" />
                <input type="password" onChange={e => { setPassword(e.target.value) }} placeholder="password" />
                <input type="button" value={'submit'} onClick={submit} />
            </form>
        </div>
    )
}

export default Register