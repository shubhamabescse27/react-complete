import React from 'react'
import Section1 from './component/Section1/Section1'
import Section2 from './component/Section2/Section2'

const App = () => {

  const users  = [
    
    {
    img: 'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro: '',
    color:'royalblue',
    tag: 'satisfied'

    },
    {
    img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro: '',
    color:'lightseagreen',
    tag: 'UnderServed'
    },
    {
    img: 'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
    intro: '',
    color:'orage',
    tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'pink',
      intro: '',
      tag: 'Underwear'
    },
    {
      img:'https://images.unsplash.com/photo-1748785826435-83c5062a5737?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'black',
      tag:'Average'
    }
  
    
  ]


  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}


export default App
