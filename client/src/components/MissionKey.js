import React from "react";

const SUCCESS = "= Success",
  ERROR = " = Fail";

function MissionKey() {
  return (
    <div className="my-3">
      <p>
        <span className="px-3 mr-2 bg-success" /> {SUCCESS}
      </p>
      <p>
        <span className="px-3 mr-2 bg-danger" /> {ERROR}
      </p>
    </div>
  );
}

export default MissionKey;
