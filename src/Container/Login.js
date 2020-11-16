import { connect } from "react-redux";
import Login from "../Components/Login/Login";
import { userLoginAction } from "../Actions/userActions";

function mapStateToProps(state) {
  const { user, isLoading, error } = state.userReducer || {};
  return { user, isLoading, error };
}
const mapDispatchToProps = {
  loginUser: userLoginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
