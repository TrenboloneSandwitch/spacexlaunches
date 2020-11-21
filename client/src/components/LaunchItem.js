import React, { memo } from "react";
import { Link } from "@reach/router";

import Moment from "react-moment";

function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{" "}
            <span className={`text-${launch_success ? "success" : "danger"}`}>
              {mission_name}
            </span>{" "}
          </h4>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary">
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(LaunchItem);