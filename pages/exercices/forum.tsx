import type { NextPage } from "next";

const Exercise4: NextPage = () => {
  return (
    <>
      <h1>FORUM</h1>
      <div className="container">
        <div className="row d-flex flex-column bd-highlight mb-3">
          <div
            id="forum"
            className="p-2 bd-highlight border border-dark rounded"
          >
            <div className="panel panel-default"></div>
          </div>

          <div
            id="msg_zone"
            className="mb-3 col-sm-12 col-md-6 p-2 bd-highlight"
          >
            <form method="post">
              <div className="mb-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control border border-dark"
                  placeholder="Name"
                />
                <input
                  type="password"
                  id="pass"
                  name="pass"
                  placeholder="password"
                  className="form-control border border-dark"
                />
                <div className="d-flex flex-row bd-highlight mb-3">
                  <span className="input-group-text border border-dark">
                    Message
                  </span>
                  <textarea
                    className="form-control border border-dark"
                    aria-label="Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
          <div className="mb-3 col-sm-12 col-md-6">
            <div className="input-group"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exercise4;
