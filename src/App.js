import React, { useState } from 'react';

import './App.css';

import Members from './Members';

function App() {
  // state to store api data
  const [congressmen, setCongressmen] = useState([]) 
  // state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);


  const API_KEY = "YOUR_API_KEY" 
  const congress = 116;
  const chamber = "senate"


  const getCongressData = async () => {
    try{  
    const url = `https://api.propublica.org/congress/v1/${congress}/${chamber}/members.json`;
    
    const res = await fetch(url, {headers:{'X-API-Key': API_KEY}})
    const data = await res.json()
    // console.log(data.results.members)
    console.log(data.results[0].members)
    setCongressmen(data.results[0].members)

    }catch(err){
    console.error(err)
    }
  }

  return (
    <div className="App">
      <h3>SENATE AND HOUSE REPRESENTATIVES INFO</h3>
      <button onClick={getCongressData}>search</button>
      <br/><br/>
      <div>      
        <Members members={congressmen}/>     
    </div>
      {/* <div>
        {congressmen.map(member => (
          <Members member={member} key={member.id}/>
        ))}
      </div> */}
    </div>
  );
}

export default App;
