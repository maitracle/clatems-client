import { useCallback, useEffect } from 'react';
import { getAuthToken } from 'utils/tokenHandler';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchMyUser } from 'store/user/actions';


export const setHttpHeader = (property: string, value: string | null) => {
  axios.defaults.headers.common[property] = value;
};

function useAuthenticate() {
  const token = getAuthToken();
  const dispatch = useDispatch();

  const authSignIn = useCallback(() => {
    if (token) {
      setHttpHeader('Authorization', `Bearer ${token}`);
      dispatch(fetchMyUser.request());
    } else {
      setHttpHeader('Authorization', null);
      dispatch(fetchMyUser.failure());
    }
  }, [dispatch, token]);

  useEffect(() => {
    authSignIn();
  }, [authSignIn]);
}

export default useAuthenticate;
