import { MdLocationOn } from "react-icons/md";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="border border-black rounded-xl p-5">
      <img className="h-12 mx-20" src={logo} alt="" />
      <h3 className="font-bold">{job_title}</h3>
      <h4>{company_name}</h4>
      <div>
        <button>{remote_or_onsite}</button>
        <button>{job_type}</button>
      </div>
      <div className="text-xs ">
        {" "}
        <MdLocationOn></MdLocationOn>
        {location} <span className="ml-4">{salary}</span>
      </div>
    </div>
  );
};

export default Job;
