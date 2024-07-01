import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function CreateUser() {

    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [pass,setPass] = React.useState('');

    const navi = useNavigate();

    function AddData(){
        axios.post('https://650be7a447af3fd22f66ac43.mockapi.io/Test',{
            Name:name,Email:email,Password:pass
        })
        .then(alert('Data Added Successfully'))
        .catch(err => console.log(err));

        navi('/')
    }

  return (
    <div className='pt-5'>
        <div className='container p-5 border border-3 border-secondary'>
            <label className='fw-bold'>Name:</label>
            <input type="text" className='text-capitalize' value={name} onChange={(e)=>{
                setName(e.target.value);
            }} />
            <label className='ms-3 fw-bold'>Email:</label>
            <input type="text" value={email} onChange={(e)=>{
                setEmail(e.target.value);
            }}/>
            <label className='ms-3 fw-bold'>Password:</label>
            <input type="password" className='text-capitalize' value={pass} onChange={(e)=>{
                setPass(e.target.value);
            }} />
            <Link to={'/'} className='btn btn-dark ms-3'>Back</Link>
            <button onClick={AddData} className='btn btn-primary ms-3'>Submit</button>
        </div>
    </div>
  )
}
