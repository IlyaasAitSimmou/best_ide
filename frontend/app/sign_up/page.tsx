import './SignUp.css'; // Import the CSS file

const SignUp: React.FC = () => {
    return (
        <div className="main">
            <div className="sign-up-container">
                <h2>Create an Account</h2>
                <form className="sign-up-form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" required />
                    </div>
                    <button type="submit" className="sign-up-button">Sign Up</button>
                </form>
                <p className="login-redirect">
                    Already have an account? <a href="/login">Log in here</a>.
                </p>
            </div>
        </div>
    );
};

export default SignUp;