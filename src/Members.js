import React from 'react';

const Members = ({members}) => {
    // const Members = ({member}) => { 
    return (
        <div>
        {members.map(member => (
            <div class="card mycard" key={member.id}>
                <div class="card-body">
                    <h5 class="card-title">name: {member.first_name} {member.last_name}</h5>
                    <h6>party: {member.party}</h6>
                    <h6>state: {member.state}</h6>
                    <h6>title: {member.title}</h6>
                    <small class="text-muted">next election: {member.next_election}</small>
                </div>
            </div>

        //     <div key={member.id}>
        //         <h1>name: {member.first_name} {member.last_name}</h1>
        //         <h2>party: {member.party}</h2>
        //         <h2>state: {member.state}</h2>
        //         <h2>title: {member.title}</h2>
        //         <h2>next election: {member.next_election}</h2> 
        // <hr/>                
        // </div>
        ))}          
        
    </div>


        // <div>          
        //         <div key={member.id}>
        //             <h1>name: {member.first_name} {member.last_name}</h1>
        //             <h2>party: {member.party}</h2>
        //             <h2>state: {member.state}</h2>
        //             <h2>title: {member.title}</h2>
        //             <h2>next election: {member.next_election}</h2>                 
        //         </div>
          
        //     <hr/><br/>
        // </div>
    )
}

export default Members;