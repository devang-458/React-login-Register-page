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
                        className="form-control rounded-2"
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
                        className="form-control rounded-2">
                        </input>
                    </div>
                    <div className="m-3">
                        <label htmlFor="password">
                            <strong>Password:-</strong>
                        </label>
                        <input
                        type="password"
                        placeholder="Enter Password"
                        
                        className="form-control"></input>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Signup;