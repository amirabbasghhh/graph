import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_BLOGS_INFO } from '../../graphql/queries';

const Blogs = () => {
    const{loading,error,data}=useQuery(GET_BLOGS_INFO)
    console.log({loading,error,data})
    console.log(error)
    return (
        <div>
            
        </div>
    );
};

export default Blogs;