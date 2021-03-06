import React from 'react'
import './listUsers.css'
import UserContainer from './UserContainer';
import Spinner from './Sppiner'

class ListUsers extends React.Component {

  state = {
    users: [],
    loading: true
  }

  componentWillReceiveProps (props) {
    this.setState({
      loading: true
    })
    setTimeout(()=>{
      this.setState({
        loading: false
      })
    }, 500)
    this.setState({
      users: props.users
    })
  }

  render () {
    return (
      <div className="ListUsers">
        {
            this.state.loading ? (
              <Spinner/>
            ) : (
              this.state.users.map( (user,index) => {
                if (user.pageRank >= this.props.rank) {
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