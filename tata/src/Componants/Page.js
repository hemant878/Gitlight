// import React from 'react'
import React from 'react';
import '../Css/Page.css'
import { useState, useEffect } from 'react'
import Rating from './Rating'
import ReactHtmlParser from 'react-html-parser';




// import Navs from "./Navs"

// const Nav = lazy(() => import('./Navs'));


function Data() {

    const [articles, setArticles] = useState([])





    useEffect(() => {

        fetch('http://127.0.0.1:8000/articles/', {

            'method': 'GET',

            headers: {
                'Content-Type': 'application/json',


            }
        })
            .then(resp => resp.json())
            .then(resp => setArticles(resp))
            .catch(error => console.log(error))



    }, [])



    return (
        <div>



            {articles.slice(0, 1).map(article => {
                return (


                    <div className='blog' key={article.id}>

                        <div className='title'>
                            <h1>{article.title}</h1>
                        </div>



                        <div className='profile'>
                            <div><img src={article.image} alt="" /></div>
                            <div className='name'>{article.name}</div>
                        </div>


                        <div className='starating'>
                            <Rating value={article.rating} />
                        </div>


                        <div className='subtitle'>
                            <div>
                                <p>{ReactHtmlParser(article.subtitle)}</p>
                            </div>
                            <div>

                                {article.rating != null ?
                                    <div className="aimg">
                                        <p style={{ marginLeft:'7px', color: '#f5961d',fontWeight:'900', marginTop:'50px'}}>Verified Purchase</p>

                                    </div>
                                    :
                                    <div className="aimg">
                                    <p style={{ marginLeft:'7px', color: '#f5961d',fontWeight:'900', marginTop:'50px'}}>Unverified Purchase</p>
                                        

                                    </div>
                                }

                            </div>
                        </div>



                        <div className='desc'>
                            <p>{ReactHtmlParser(article.description)}</p>
                        </div>







                    </div>







                )
            })}
        </div>





    );
}

export default Data
