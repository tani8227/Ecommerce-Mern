import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Actions } from './reducers/AuthReducer';

const AuthLoader = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    try {
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');
  
      if (user && token) {
        const parsedUser = JSON.parse(user);
        dispatch(Actions.setAuthUser(parsedUser));
        dispatch(Actions.setAuthUserToken(token));
      }
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, [dispatch]);

  return null; 
};

export default AuthLoader;
