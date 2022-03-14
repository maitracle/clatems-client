import useAuthenticate from 'hooks/useAuthToken';


const AppInitializer = () => {
  useAuthenticate();

  return null;
};

export default AppInitializer;
