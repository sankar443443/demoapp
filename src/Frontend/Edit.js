import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate,Link, useParams } from 'react-router-dom';


export default function Edit() {

    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [pass,setPass] = React.useState('');

    const navi = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        axios.get('https://650be7a447af3fd22f66ac43.mockapi.io/Test'+id)
        .then(res =>{
            setName(res.data.Name);
            setEmail(res.data.Email);
            setPass(res.data.Password);
        })
    })

    function UpdateData(){
        axios.put('https://650be7a447af3fd22f66ac43.mockapi.io/Test'+id,{
            Name:name,Email:email,Password:pass
        })
        .then(alert('Data Updated Successfully'))
        .catch(err => console.log(err));

        navi('/')
    }

  return (
    <div>
        <div className='pt-5'>
        <div className='container p-5 '>
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
            <button onClick={UpdateData} className='btn btn-primary ms-3'>Submit</button>
        </div>
    </div>
    </div>
  )
}
