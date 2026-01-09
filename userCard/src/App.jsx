import Card from './components/Card'

export default function App (){

  const companies = [
  {
    logo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    role: "Senior UI/UX Designer",
    cat1: "Part-time",
    cat2: "Senior Level",
    payPerHour: "$120/hr",
    location: "San Francisco, CA"
  },
  {
    logo: "https://logo.clearbit.com/google.com",
    name: "Google",
    role: "Frontend Developer",
    cat1: "Full-time",
    cat2: "Mid Level",
    payPerHour: "$85/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft",
    role: "Software Engineer",
    cat1: "Full-time",
    cat2: "Senior Level",
    payPerHour: "$95/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    role: "Product Designer",
    cat1: "Full-time",
    cat2: "Junior Level",
    payPerHour: "$65/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    role: "iOS Developer",
    cat1: "Full-time",
    cat2: "Senior Level",
    payPerHour: "$105/hr",
    location: "Cupertino, CA"
  },
  {
    logo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    role: "Content Strategist",
    cat1: "Part-time",
    cat2: "Mid Level",
    payPerHour: "$75/hr",
    location: "Los Gatos, CA"
  },
  {
    logo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    role: "Machine Learning Engineer",
    cat1: "Full-time",
    cat2: "Senior Level",
    payPerHour: "$110/hr",
    location: "Pune, India"
  },
  {
    logo: "https://logo.clearbit.com/google.com",
    name: "Google",
    role: "Backend Developer",
    cat1: "Part-time",
    cat2: "Mid Level",
    payPerHour: "$80/hr",
    location: "Gurugram, India"
  },
  {
    logo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    role: "Cloud Solutions Architect",
    cat1: "Full-time",
    cat2: "Senior Level",
    payPerHour: "$100/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    role: "Data Analyst",
    cat1: "Full-time",
    cat2: "Junior Level",
    payPerHour: "$60/hr",
    location: "Delhi, India"
  }
]

  return(
    <div className='parent'>
      {companies.map(function(ele){

        return <Card logo = {ele.logo} companyName = {ele.name} companyRole = {ele.role} companyCat1 = {ele.cat1} companyCat2 = {ele.cat2}companyPay = {ele.payPerHour} companyLoc = {ele.location}/>

      })}
    </div>
  )
}