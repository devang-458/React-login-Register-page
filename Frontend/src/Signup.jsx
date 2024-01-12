function Signup(){
    return(
        <div className="d-flex bg-secondary vh-100 justify-content-center align-items-center " >
            <div className="w-25 bg-white p-3 rounded">
                <h2>
                    Register
                </h2>
                <form>
                    <div className="m-3">
                        <label htmlFor="name">
                            <strong>Name:-</strong>
                        </label>
                        <input
                        type="text"
                        autoComplete="off"
                        placeholder="Enter Name"
                        name="name"
                        className="form-control rounded-0"
                        >
                        </input>
                    </div>
                    <div className="m-3">
                        <label htmlFor="email">
                            <strong>Email:-</strong>
                        </label>
                        <input
                        type="text"
                        placeholder="Enter Email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0">
                        </input>
                    </div>
                    <div className="m-3">
                        <label htmlFor="password">
                            <strong>Password:-</strong>
                        </label>
                        <input
                        type="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        name="password"
                        className="form-control rounded-0"></input>
                    </div>
                    <button tyoe="sumbit" className="w-100 btn btn-success rounded-2">Register
                    </button>
                    <p>Already Have an Account</p>
                    <button className="btn btn-default border w-100 bg-light rounded-2 text-decoration-none">Login</button>
                </form>

            </div>

        </div>
    )
}

export default Signup;