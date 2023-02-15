import axios from 'axios'
import React,{FC, useEffect, useState} from 'react'
import { IUser } from '../types/types';
import {useParams, useNavigate} from 'react-router-dom';

interface UserItemPageParams{
    id: string
}

const UserItemPage:FC = () => {
    const [users, setUser] = useState<IUser | null>(null)
    const params = useParams()
    const navigate = useNavigate();

    useEffect(()=>{
      fetchUser()   
    },[])

    
  
    async function fetchUser() {
      try {
        const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        setUser(response.data)
      } catch (error) {
        alert(error)
      }    
    }
  return (
    <div>
        <button onClick={()=>navigate('/users')}>Back</button>
        <div>UserItemPage</div>        
        <h1>Страница Пользователя {users?.name}</h1>
        <div>
            {users?.address.city}
        </div>
        <div>
            {users?.address.street}
        </div>
    </div>
    
  )
}

export default UserItemPage
