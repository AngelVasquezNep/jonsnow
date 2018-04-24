import React, {Component} from 'react'
import UserFull from './UserFull';
import User from './User';


class UserContainer extends Component {
  state = {
    userFull: false
  }

  render () {
    return (
      <div>
          {
            !this.state.userFull ? (
                <User 
                  {...this.props}
                  />
                ) : (
                <UserFull 
                  {...this.props}
                />
              )
          }
      </div>
    )
  }
}

export default UserContainer