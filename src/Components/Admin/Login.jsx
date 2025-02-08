import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

function Login() {

    const API_BASE_URL = import.meta.env.VITE_APP_BACKEND_URL;
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Email and Password are required!");
            return;
        }

        try {
            const response = await axios.post(
                `${API_BASE_URL}/api/auth/login`,
                { email, password },
                { withCredentials: true } // Allows sending cookies
            );

            // setMessage(response.data.message);

            if (response.data.success) {
                setError("");
                
                // Store email in localStorage (optional)
                localStorage.setItem("email", email);

                navigate("/admin/dashboard/EduBrix$Overseas$Consultancy/SWAPNAJA-ABHISHEK");
            }
        } catch (err) {
            setError(err.response?.data?.error || "Something went wrong!");
        }
    };

    return (
        <div id="login" className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1>Login</h1>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="pwd"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
