import React, { Fragment } from "react";
import LaunchItem from "./LaunchItem";
import { gql, useQuery } from "@apollo/client";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <h4 className="my-3">Loading...</h4>;
  if (error) return <h4 className="my-3">{error.message}</h4>;
  return (
    <Fragment>
      <h1 className="display-4 my-4">Launches</h1>
      <MissionKey />

      {data.launches.map((launch) => (
        <LaunchItem
          key={`${launch.flight_number}-${launch.launch_date_local}`}
          launch={launch}
        />
      ))}
    </Fragment>
  );
}

export default Launches;
