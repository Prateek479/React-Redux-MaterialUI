import { connect } from "react-redux";
import SignUp from "../Components/SignUp/SignUp";
import { userSignUpAction } from "../Actions/userActions";

function mapStateToProps(state) {
  const { user, isLoading, error } = state.userReducer || {};
  return { user, isLoading, error };
}
const mapDispatchToProps = {
  signupUser: userSignUpAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
