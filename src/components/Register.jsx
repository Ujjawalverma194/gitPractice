import React from "react";

const Register = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light py-5">
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ width: "100%", maxWidth: "450px" }}
      >
        <div className="card-body">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">Create Account</h2>
            <p className="text-muted">Sign up to get started</p>
          </div>

          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-3"
                placeholder="Enter your full name"
                required
              />
            </div>

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
              <label className="form-label fw-semibold">Phone Number</label>
              <input
                type="tel"
                className="form-control form-control-lg rounded-3"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control form-control-lg rounded-3"
                placeholder="Create a password"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Confirm Password</label>
              <input
                type="password"
                className="form-control form-control-lg rounded-3"
                placeholder="Confirm your password"
                required
              />
            </div>

            <div className="form-check mb-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                required
              />
              <label className="form-check-label" htmlFor="terms">
                I agree to the{" "}
                <a href="/terms" className="text-primary text-decoration-none">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg w-100 rounded-3 fw-semibold"
            >
              Create Account
            </button>
          </form>

          <div className="text-center mt-4">
            <span className="text-muted">Already have an account? </span>
            <a
              href="/login"
              className="text-primary fw-semibold text-decoration-none"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;