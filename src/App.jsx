
import Card from './components/Card'

const App = () => {
 const jobListings = [
  {
    companyName: "Anthropic",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtjfrl6Wk4tqeFxwUV_gcWNpOM0uumbbBYQ&s", // Using Logo.dev public demo token
    postingTime: "2 hours ago",
    jobPosition: "Senior AI Product Designer",
    timeType: "Full Time",
    payRate: "$165/hour"
  },
  {
    companyName: "Stripe",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcX9uh7FHVzyUZuSZmjFeC7W9Dcli8sNg-Q&s",
    postingTime: "5 hours ago",
    jobPosition: "Staff Backend Engineer (Payments)",
    timeType: "Full Time",
    payRate: "$180/hour"
  },
  {
    companyName: "Airbnb",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDmR8nSuSzVAalSUh9SpHWv6LMaVsrvbdyMw&s",
    postingTime: "10 hours ago",
    jobPosition: "Senior UI/UX Designer",
    timeType: "Full Time",
    payRate: "$140/hour"
  },
  {
    companyName: "Vercel",
    logo: "https://img.icons8.com/ios_filled/1200/vercel.jpg",
    postingTime: "3 hours ago",
    jobPosition: "Frontend Infrastructure Engineer",
    timeType: "Full Time",
    payRate: "$130/hour"
  },
  {
    companyName: "Discord",
    logo: "https://static.vecteezy.com/system/resources/previews/023/986/880/non_2x/discord-logo-discord-logo-transparent-discord-icon-transparent-free-free-png.png",
    postingTime: "1 day ago",
    jobPosition: "Full Stack Developer (Growth)",
    timeType: "Part Time",
    payRate: "$110/hour"
  },
  {
    companyName: "Notion",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsm_Vlpik1sY_SiDoH6dhDdRFjAShmquOPQA&s",
    postingTime: "6 hours ago",
    jobPosition: "Junior Product Designer",
    timeType: "Full Time",
    payRate: "$85/hour"
  },
  {
    companyName: "Figma",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljqaDsIkzZQsQ01cpqsnbJ4TF75ZfXhVHQg&s",
    postingTime: "12 hours ago",
    jobPosition: "Lead Systems Engineer",
    timeType: "Full Time",
    payRate: "$195/hour"
  },
  {
    companyName: "Tesla",
    logo: "https://img.icons8.com/win10/1200/tesla-logo.jpg",
    postingTime: "2 hours ago",
    jobPosition: "Embedded Systems Developer",
    timeType: "Full Time",
    payRate: "$155/hour"
  },
  {
    companyName: "Postman",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWljheH88qcaUyOBSYs7uILchXcKdZosvLg&s",
    postingTime: "8 hours ago",
    jobPosition: "Backend API Engineer",
    timeType: "Full Time",
    payRate: "$125/hour"
  },
  {
    companyName: "Canvas",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jO7d8LwdhgashKoc61Ek1vmni34vaLP15Q&s",
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
