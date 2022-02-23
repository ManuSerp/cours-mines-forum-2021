import type { NextPage } from "next";

import Message from "../components/Message";
import MessageList from "../components/MessageList";
import NewForm from "../components/NewForm";

const Exercise4: NextPage = () => {
  return (
    <>
      <h1>FORUM</h1>
      <div className="container-fluid">
        <div className="d-flex flex-row">
          <div>
            <div id="list" className="list-group">
              <a
                href="#"
                className="list-group-item list-group-item-action flex-column align-items-start active"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Topic 1</h5>
                  <small>3 days ago</small>
                </div>
                <p className="mb-1">description</p>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action flex-column align-items-start bg-warning"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Topic 2</h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">description</p>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action flex-column align-items-start bg-warning"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Topic 3</h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">Description </p>
              </a>
            </div>
          </div>
          <div id="fl" className="d-flex flex-column flex-grow-1">
            <div
              id="forum"
              className="p-2 bd-highlight border border-dark rounded flex-grow-1 scroll    "
            >
              <MessageList></MessageList>
            </div>

            <div id="msg_zone" className=" p-2 bd-highlight">
              <NewForm></NewForm>
            </div>
            <div className="mb-3 col-sm-12 col-md-6">
              <div className="input-group"></div>
            </div>
          </div>
          <div id="margin"></div>
        </div>
      </div>
    </>
  );
};

export default Exercise4;
