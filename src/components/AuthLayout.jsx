import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected ({children, authentication = true}) {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
        // Make it more easy

        // if(authStatus === true) {
        //     navigate("/");
        // } else if (authStatus === false) {
        //     navigate("/login");
        // }

        // If difficult do this and Understand
        // let authValue = authStatus === true ? true : false;

        // true && false !== true 
        // true && true
        if(authentication && authStatus !== authentication) {
            navigate("/login");
        }
        // false && true !== false
        // false !== true
        else if(!authentication && authStatus !== authentication) {
            navigate("/");
        }
        setLoader(false);
    }, [authStatus, navigate, authentication])

  return  loader ? <h1> Loading...</h1> : <h1>{children}</h1>;
}

