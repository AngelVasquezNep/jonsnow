import React from 'react'
import User from './User';


class ListUsers extends React.Component {

  state = {
    users: []
  }

  componentWillReceiveProps (props) {
    console.log(props)
    this.setState({
      users: props.users
    })
  }

  render () {

    return (
      <div className="ListUsers">
        {
            this.state.users.map( (user,index) => {
              if (!user.pageRank) {
                console.log(1)
              } else if (user.pageRank > this.props.rank) {
                return <User image = { `https://api.got.show/${user.imageLink}`} name = {user.name} key = {index} />
              }
            }) 
        }
      </div>
    )
  
  }
}

export default ListUsers