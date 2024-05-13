import { useNavigate } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import { useEffect, useState } from "react";
import axios from "axios";

const LoginApi = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8002/api/signin', {
                username: 'adminboon',
                password: 'dsp@1234',
            });
                const { access_token } = response.data;
                setToken(access_token);
                navigate("/", { replace: true });
            console.log(response)
        } catch (error) {
            setError(error.message); 
        }
    };
    setTimeout(() => {
        handleLogin();
    }, 3 * 1000);

    return <>LoginApi Page</>;
};

export default LoginApi;