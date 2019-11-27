import React from 'react';
import UserDisplayComponent from './UserDisplayComponent';

class UserShowPage extends React.Component {

    state = {
        selected_user: null
    }

    render() {

        return (
            <div>
                {this.state.selected_user ? <UserDisplayComponent user_id={this.state.selected_user}/> : null}
            </div>
        )
    }
}

export default UserShowPage;