import React, { useEffect, useState } from 'react';
import './App.css';
// import components
import Members from './Members';
import CongressPagination from './CongressPagination';


function App() {
  // state to store api data
  const [congressmen, setCongressmen] = useState([]) 
  // state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);



  //setting up pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = congressmen.slice(indexOfFirstPost, indexOfLastPost);



  // change page function(pagination)
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const API_KEY = "YOUR_API_KEY"
  const congress = 116;
  const chamber = "senate"

  //function to fetch congress members data
  const getCongressData = async () => {
    try{  
    const url = `https://api.propublica.org/congress/v1/${congress}/${chamber}/members.json`;
    
    const res = await fetch(url, {headers:{'X-API-Key': API_KEY}})
    const data = await res.json()
  
    setCongressmen(data.results[0].members)

    }catch(err){
    console.error(err)
    }
  }


  return (
      <div>
        <div className="App">
          <h3>SENATE AND HOUSE REPRESENTATIVES INFO</h3>
          <button onClick={getCongressData}>search</button>
          <br/><br/>
        </div>  
        <div>      
            <CongressPagination postsPerPage={postsPerPage} totalPosts={congressmen.length} paginate={paginate}/>
            <Members members={currentPosts} />  
            <CongressPagination postsPerPage={postsPerPage} totalPosts={congressmen.length} paginate={paginate}/>
        </div>
      </div>
  );
}

export default App;
