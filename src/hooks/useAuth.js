import { useContext } from 'react';
import { AuthContext } from '../context/AuthSupply';


const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;