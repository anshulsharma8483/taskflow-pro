import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);

      // Store token in localStorage
      localStorage.setItem(
        "token",
        response.data.token
      );

      // Store user data
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login Successful");

      // Redirect to dashboard
      window.location.href = "/dashboard";

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "10px",
          gap: "15px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        }}
      >

        <h1
          style={{
            textAlign: "center",
          }}
        >
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={{
            padding: "12px",
            fontSize: "16px",
          }}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            padding: "12px",
            fontSize: "16px",
          }}
          required
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#4f46e5",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        >
          Login
        </button>

        <p
          style={{
            textAlign: "center",
          }}
        >
          Don't have an account?

          <a
            href="/register"
            style={{
              marginLeft: "5px",
            }}
          >
            Register
          </a>
        </p>

      </form>

    </div>
  );
}

export default Login;