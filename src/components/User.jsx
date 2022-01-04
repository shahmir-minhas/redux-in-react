import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../Redux/User/userActionCreators";

const Users = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>

      {userData.loading ? (
        <h3>loading...</h3>
      ) : userData.error ? (
        <p>{userData.error}</p>
      ) : (
        <div>
          <h2>User List</h2>
          <ul>
            {console.log(userData.users)}
            {userData &&
              userData.users &&
              userData.users.map((u) => <li>{u}</li>)}
          </ul>
        </div>
      )}
    </>
  );
};

const mapStateToPtops = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToPtops, mapDispatchToProps)(Users);
