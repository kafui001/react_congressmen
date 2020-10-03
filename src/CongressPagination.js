import React from 'react';

const CongressPagination = ({postsPerPage, totalPosts,paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav className="App">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                            {console.log(number)}
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default CongressPagination;