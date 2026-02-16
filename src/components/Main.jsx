import { useState } from "react";
const authorInput = {
  author: "",
  title: "",
  body: "",
  public: "",
};

export default function Main() {
  const [authorInfo, setAuthorInfo] = useState(authorInput);

  return (
    <div className="container-sm d-flex flex-column align-items-center">
      <h1>Form Compiler</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Article info</h5>
          <form>
            <p className="fw-bold m-0">Author</p>
            <div className="card-text">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <p className="fw-bold m-0">Title</p>
            <div className="card-text">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <p className="fw-bold m-0">Body</p>
            <div className="input-group mb-4">
              <textarea
                className="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="checkIndeterminate"
              />
              <label className="form-check-label">
                L'articolo deve essere pubblico?
              </label>
            </div>
            <button href="#" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
