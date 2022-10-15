import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const Schedules = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState({});
  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // destructuring the data response from api
        const {
          venue
          
        } = data;

        setLoading(false);
        setVenue(venue);
        setSchedule(data.schedules);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-item-center">
        <h1 className="text-center w-100">
          Mater Dei College {venue.building}
        </h1>
        {error && (
          <p className="text-danger text-center">
            Something's wrong fetching the API
          </p>
        )}
        {loading && (
          <p className="text-white bg-primary text-center">
            Loading building and schedule record ....
          </p>
        )}
        <table className="table text-center">
          <thead>
            <tr>
            <td class="table-active">#</td>
              <td class="table-primary">Name</td>
              <td class="table-secondary">Building</td>
              <td class="table-success">Capacity</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="table-active">{venue.id}</td>
              <td class="table-primary">{venue.name}</td>
              <td class="table-secondary">{venue.building}</td>
              <td class="table-success">{venue.capacity}</td>
            </tr>
          </tbody>
        </table>
        <h1
          className={
            schedule
              ? "text-center"
              : " text-center "
          }
        >
          {schedule ? "Schedules" : "No Schedule Found"}
        </h1>
        {schedule && (
          <table className="table table-striped text-center">
            <thead>
            <tr>
              <td class="table-active">ID</td>
              <td class="table-primary">Course No</td>
              <td class="table-secondary">Description</td>
              <td class="table-success">Schedule</td>
              <td class="table-danger">Size</td>
              <td class="table-warning">Teacher</td>
            </tr>
            </thead>
            <tbody>
              {Object.keys(schedule)?.map((sched, index) => {
                return (
                  <tr key={index}>
                    <td class="table-active">{schedule[sched].id}</td>
                    <td class="table-primary">{schedule[sched].course_no}</td>
                    <td class="table-secondary">{schedule[sched].description}</td>
                    <td class="table-success">{schedule[sched].schedule}</td>
                    <td class="table-danger">{schedule[sched].size}</td>
                    <td class="table-warning">{schedule[sched].teacher}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <Link to="/venues" className="btn btn-sm btn-primary mt-1">
        Back to Venues
      </Link>
    </>
  );
};

export default Schedules;