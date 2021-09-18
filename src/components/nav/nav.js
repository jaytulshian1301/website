export default function Nav() {
    return (
      <nav className="navbar navbar-expand-xl navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><i className="fas fa-chart-area"></i> botanalytics</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link m-auto" id="active-link" href="../other">Dashboard</a>
              <a className="nav-link m-auto" href="#">Conversations</a>
              <a className="nav-link m-auto" href="#">Users</a>
              <a className="nav-link m-auto">Engagement</a>
              <a className="nav-link m-auto">Integrations</a>
              <a className="nav-link m-lg-auto">Integrations</a>
  
            </div>
          </div>
        </div>
      </nav>
    );
  }