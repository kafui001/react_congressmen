import React from 'react';

const Members = ({members}) => {
    return (
        <div>
        {members.map(member => (
            <div className="card mycard" key={member.id}>
                <div className="card-body">
                    <h5 className="card-title">{member.first_name} {member.last_name}</h5>
                    <h6>{member.title}</h6>
                    <h6>party: {member.party}</h6>
                    <h6>state: {member.state}</h6>
                    <small className="text-muted">next election: {member.next_election}</small>
                </div>
            </div>
        ))}          
        
    </div>
    )
}

export default Members;