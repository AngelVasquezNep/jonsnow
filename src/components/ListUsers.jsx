import React from 'react'
// import User from './User';
import './users.css'
import UserFull from './UserFull';

class ListUsers extends React.Component {

  state = {
    users: []
  }

  componentWillReceiveProps (props) {
    this.setState({
      users: props.users
    })
  }

  render () {

    return (
      <div className="ListUsers">
        {
            this.state.users.map( (user,index) => {
              if (user.pageRank >= this.props.rank) {
                // return <User 
                //         image = { `https://api.got.show/${user.imageLink}`} 
                //         name = {user.name} 
                //         key = {index} 
                //         />
                return <UserFull {...user} 
                        key = {index} 
                        />
              }
            }) 
        }
      </div>
    )
  
  }
}

export default ListUsers