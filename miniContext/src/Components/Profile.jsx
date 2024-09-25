import React, {useContext} from 'react'
import UserContext from '../Contest/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please LogIn</div>

    return <div> user: {user.UserName} </div>
}

export default Profile
