import React, {Component} from 'react'
import UserFull from './UserFull';
import User from './User';


class UserContainer extends Component {
  state = {
    userFull: false
  }

  handleClickUser = () => {
    this.setState({
      userFull: !this.state.userFull
    })
  }

  render () {
    return (
      <div>
          {
            !this.state.userFull ? (
                <User
                  handleClick = {this.handleClickUser}
                  {...this.props}
                  />
                ) : (
                <UserFull 
                  handleClick = {this.handleClickUser}
                  {...this.props}
                />
              )
          }
      </div>
    )
  }
}

export default UserContainer