import React from 'react'
// import User from './User';
import './users.css'
import UserFull from './UserFull';
import UserContainer from './UserContainer';

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
            this.state.users === [] && this.state.users[0] !== [] ? (
              console.log("GARGANDO")
            ) : (
              
              this.state.users.map( (user,index) => {
                if (user.pageRank >= this.props.rank) {
                  // return <User 
                  //         image = { `https://api.got.show/${user.imageLink}`} 
                  //         name = {user.name} 
                  //         key = {index} 
                  //         />
                  // return <UserFull {...user} 
                  // key = {index} 
                  // />
                  return <UserContainer {...user}
                                 image = { `https://api.got.show/${user.imageLink}`} 
                                 key = {index} 
                      />
                }
              }) 
            )
        }
      </div>
    )
  
  }
}

export default ListUsers