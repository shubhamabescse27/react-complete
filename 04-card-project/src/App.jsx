import React from "react";
import Card from './components/Card'
import User from './components/User'

const App = () => {
 const jobs = [
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    name: "Amazon",
    datePosted: "5 days ago",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$14/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    name: "Google",
    datePosted: "8 days ago",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$15/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    name: "Microsoft",
    datePosted: "2 weeks ago",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$32/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    name: "Apple",
    datePosted: "3 weeks ago",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$28/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo:  "https://pngimg.com/uploads/meta/meta_PNG12.png",
    name: "Meta",
    datePosted: "1 month ago",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$35/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo:"https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    name: "NVIDIA",
    datePosted: "4 days ago",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$18/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
    name: "IBM",
    datePosted: "10 days ago",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$10/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    name: "Oracle",
    datePosted: "2 weeks ago",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$16/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo:"https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
    name: "Cisco",
    datePosted: "3 weeks ago",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$13/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    name: "Adobe",
    datePosted: "6 weeks ago",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$22/hr",
    location: "Mumbai, India"
  }
];
  return (
    <div className="parent">
      {jobs.map(function(elem,idx){
       return <div key={idx}> 
       <Card name={elem.name} tag2={elem.tag2} tag1={elem.tag1} pay={elem.pay} brandLogo={elem.brandLogo} datePosted={elem.datePosted}/>
       </div>
      })}
    </div>
  )
}
export default App;