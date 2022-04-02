const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-dark fixed-top"
        style={{ boxShadow: "0px 8px 8px -6px #cfc678" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-warning" href="/Home">
            ProLance IT
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  href="/AddStudents"
                >
                  Add Videos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  href="/StudentsList"
                >
                  My PlayList
                  <span className="badge bg-warning text-dark mx-1"></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  href="/AddMarks"
                >
                  New Releases
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  href="/marks"
                >
                  Gaming
                  <span className="badge bg-warning text-dark mx-1"></span>
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <a href="/Login">
                <button
                  className="btn btn-warning AddstudentBtn mx-2 px-4"
                  style={{ boxShadow: "0 0 0 1px #8f8d8d" }}
                  type="submit"
                >
                  Login
                </button>
              </a>

              <button
                className="btn btn-warning AddstudentBtn"
                style={{ boxShadow: "0 0 0 1px #8f8d8d" }}
                type="submit"
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
