
import Card from './components/Card'

const App = () => {
 const jobListings = [
  {
    companyName: "Anthropic",
    logo: "https://img.logo.dev/anthropic.com?token=pk_demo", // Using Logo.dev public demo token
    postingTime: "2 hours ago",
    jobPosition: "Senior AI Product Designer",
    timeType: "Full Time",
    payRate: "$165/hour"
  },
  {
    companyName: "Stripe",
    logo: "https://img.logo.dev/stripe.com?token=pk_demo",
    postingTime: "5 hours ago",
    jobPosition: "Staff Backend Engineer (Payments)",
    timeType: "Full Time",
    payRate: "$180/hour"
  },
  {
    companyName: "Airbnb",
    logo: "https://img.logo.dev/airbnb.com?token=pk_demo",
    postingTime: "10 hours ago",
    jobPosition: "Senior UI/UX Designer",
    timeType: "Full Time",
    payRate: "$140/hour"
  },
  {
    companyName: "Vercel",
    logo: "https://img.logo.dev/vercel.com?token=pk_demo",
    postingTime: "3 hours ago",
    jobPosition: "Frontend Infrastructure Engineer",
    timeType: "Full Time",
    payRate: "$130/hour"
  },
  {
    companyName: "Discord",
    logo: "https://img.logo.dev/discord.com?token=pk_demo",
    postingTime: "1 day ago",
    jobPosition: "Full Stack Developer (Growth)",
    timeType: "Part Time",
    payRate: "$110/hour"
  },
  {
    companyName: "Notion",
    logo: "https://img.logo.dev/notion.so?token=pk_demo",
    postingTime: "6 hours ago",
    jobPosition: "Junior Product Designer",
    timeType: "Full Time",
    payRate: "$85/hour"
  },
  {
    companyName: "Figma",
    logo: "https://img.logo.dev/figma.com?token=pk_demo",
    postingTime: "12 hours ago",
    jobPosition: "Lead Systems Engineer",
    timeType: "Full Time",
    payRate: "$195/hour"
  },
  {
    companyName: "Tesla",
    logo: "https://img.logo.dev/tesla.com?token=pk_demo",
    postingTime: "2 hours ago",
    jobPosition: "Embedded Systems Developer",
    timeType: "Full Time",
    payRate: "$155/hour"
  },
  {
    companyName: "Postman",
    logo: "https://img.logo.dev/postman.com?token=pk_demo",
    postingTime: "8 hours ago",
    jobPosition: "Backend API Engineer",
    timeType: "Full Time",
    payRate: "$125/hour"
  },
  {
    companyName: "Canvas",
    logo: "https://img.logo.dev/canvas.com?token=pk_demo",
    postingTime: "4 hours ago",
    jobPosition: "UI Engineer (React focus)",
    timeType: "Full Time",
    payRate: "$115/hour"
  }
];



return (
  <div className='parent'>
    {jobListings.map(function(elem) {
      return <Card companyName = {elem.companyName} logo ={elem.logo} postingTime ={elem.postingTime} jobPosition = {elem.jobPosition} timeType = {elem.timeType} payRate = {elem.payRate} />
    })}
  </div>
  )
}

export default App