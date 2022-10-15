

import useFetch from "./useFetch";
import {Link} from 'react-router-dom'

const Venues = () => {
  const { data, loading, error } = useFetch(
    "https://sis.materdeicollege.com/api/venues"
  );


  return (
    <>
      <h1 className="text-center">
        Mater Dei College Venues
      </h1>
      {error && (
        <p className="text-danger text-center">Something wrong from the API</p>
      )}
      {loading && (
        <div className="text-center bg-primary text-white">
          Loading Venues...
        </div>
      )}
      <table className="table table-striped">
        <thead>
          <tr>
          <td class="table-active">#</td>
              <td class="table-primary">Name</td>
              <td class="table-secondary">Building</td>
              <td class="table-success">Capacity</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data)?.map((venue, index) => {
            return (
              <tr key={index} className="hover-effect">
                <td class="table-active">{data[venue].id}</td>
                <td class="table-primary">{data[venue].name}</td>
                <td class="table-secondary">{data[venue].building}</td>
                <td className="d-flex justify-content-between  align-items-center">
                  <div>{data[venue].capacity}</div>
                  <Link to={`/venues/${data[venue].id}`} className="btn btn-sm btn-primary mt-1">
                        View Schedules
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Venues;