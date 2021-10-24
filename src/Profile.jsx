import React from "react";
import { connect } from 'react-redux';

const Profile = (props) => {

    return(
        <div>{props.login}</div>
    )
}

let mapStateToProps = (state) => {
    return {
    login: state.login
} 
}

export default connect(mapStateToProps)(Profile);