import React from 'react';

const Search = () => {
    return (
        <form className='col-md-6 mx-auto' method="get" action="">
            <input className="form-control" type="text" name="search" placeholder='Search movies here' />
        </form>
    );
};

export default Search;
