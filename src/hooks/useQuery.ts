import { useLocation } from 'react-router';
import queryString from 'query-string';


export const useQuery = () => {
  return queryString.parse(useLocation().search);
};
