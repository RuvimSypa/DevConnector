import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layuot/Spinner";

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? <Spinner/> : <Fragment>
    <h1 className="large text-primari">DashBoard</h1>
    <p className="lead"><i className="fas fa-user"> Welcome {user && user.name} </i></p>
    {profile !== null ? <Fragment>has</Fragment> : <Fragment>
      <p>You have yet setup a profile, please add some info</p>
      <Link to='/create-profile' className='btn btn-primary my-1'>Create profile</Link>
    </Fragment>}
  </Fragment>;
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth, profile }) => ({
  auth,
  profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);