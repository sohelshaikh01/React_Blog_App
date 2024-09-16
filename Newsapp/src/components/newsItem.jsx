import React, { Component } from 'react';

const NewsItem = (props) => {

    let {title, description, imageUrl, url, author, date, source} = props;
    // const stockImage = "https://via.placeholder.com/400x200";
    const onlineImage = "https://images.unsplash.com/photo-1710781403938-5a29304f37ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9wdWxhcnxlbnwwfHwwfHx8MA%3D%3D";

    const onlineImage1 = [ { "url" : "https://images.unsplash.com/photo-1616071906060-1f425a639465?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9wdWxhcnxlbnwwfHwwfHx8MA%3D%3D"}, 
    { "url" : "https://images.unsplash.com/photo-1616071906060-1f425a639465?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9wdWxhcnxlbnwwfHwwfHx8MA%3D%3D"}, 
    { "url" : "https://images.unsplash.com/photo-1592853612111-aff937e36468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9wdWxhcnxlbnwwfHwwfHx8MA%3D%3D"}, 
    { "url" : "https://media.istockphoto.com/id/1415217642/photo/wooden-cubes-with-happy-face.webp?b=1&s=612x612&w=0&k=20&c=gW8_a-gdkUIeGFAZZ2ExFutz3PEm5VvsuGqFycn1pYM="}, 
    { "url" : "https://unsplash.com/photos/a-river-runs-through-a-row-of-buildings-nwnQuv2KlXI"} ];

    return (

        <div className="my-3">

            <div className="card " style={{width: "20rem"}}>
                <p className='position-absolute top-0 bg-primary rounded-pill px-2 py-1 z-10' style={{right: 0, zIndex: 1, color: 'white', margin: '5px'}}> {source} </p>
                <img src={imageUrl?imageUrl:onlineImage1[2].url} className="card-img" alt="Thumbnail"/>

                <div className="card-body">
                    <h5 className="card-title"> {title}...</h5>
                    <p className="card-text"> {description}...</p>
                    <p className='card-text'><small className='text-muted'>By {author?author:'unknown'} on {new Date(date).toGMTString()}</small></p>
                    <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm text-white btn-dark" >Read More</a>
                </div>

            </div>
        </div>

    )

}
export default NewsItem;
