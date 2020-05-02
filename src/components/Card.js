import React from "react";
import { Placeholder } from "semantic-ui-react";

function Card() {
  return (
    <div className="row">
      <div className="col-md-4 border m-3 dashboard-card">
        <div className="card-body">
          <h5 className="card-title">Cute Dog</h5>
          <p className="card-text text-muted">Animals</p>
          <Placeholder>
            <Placeholder.Paragraph>
              <Placeholder.Line></Placeholder.Line>
              <Placeholder.Line></Placeholder.Line>
              <Placeholder.Line></Placeholder.Line>
            </Placeholder.Paragraph>
          </Placeholder>
          <br></br>
          <hr className="mt-5"></hr>
          <div className="float-right">
            <img
              className="rounded-circle"
              src="https://img.icons8.com/emoji/30/000000/man-vampire.png"
              alt="dp"
            />
            &nbsp;<span className="text-secondary">Matt</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 border m-3 dashboard-card">
        <div className="card-body"></div>
      </div>
    </div>
  );
}

export default Card;
