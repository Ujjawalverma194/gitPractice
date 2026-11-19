import React from "react";

const Login = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ width: "100%", maxWidth: "420px" }}
      >
        <div className="card-body">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">Welcome Back!</h2>
            <p className="text-muted">Login to your account</p>
          </div>

          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                className="form-control form-control-lg rounded-3"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control form-control-lg rounded-3"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>

              <a href="/forgot-password" className="text-primary text-decoration-none">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg w-100 rounded-3 fw-semibold"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-4">
            <span className="text-muted">Don't have an account? </span>
            <a href="/register" className="text-primary fw-semibold text-decoration-none">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;