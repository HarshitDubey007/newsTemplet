import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Templete() {
    const [getresponse, setResponse] = useState([])
    const [getOneresponse, setOneResponse] = useState({})


    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=apple&sortBy=publishedAt&apiKey=5beb0e243c904411960d3bc0e7a14add`).then((data) => {
        console.log("data.data.articles: ", data.data.articles)    
        setResponse(data.data.articles)
            setOneResponse(data.data.articles[0])
        }).catch((error) => {
            console.log("Error: ", error.response)
        })
    }, [])



    return (
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-lg-8">
                    <div class="news-card p-4 bg-secondary-subtle">
                        <div class="news-heading">
                            WELCOME TO BULTERN
                        </div>
                        <h4 class="mt-3">Craft Narrative</h4>
                    </div>
                </div>
            </div>
            {getresponse && getOneresponse && <div>
                <div class="row mt-5">
                    <div class="col-lg-6">
                        <img src={getOneresponse?.urlToImage} alt="" class="img-fluid" />
                    </div>
                    <div class="col-lg-6">
                        <div class="news-card p-4">
                            <div class="single-list d-flex align-items-center">
                                <div class="list-icon" style={{ fontSize: '10px' }}>
                                    <img class="rounded-3" src="https://s3-ap-south-1.amazonaws.com/av-blog-media/wp-content/uploads/2018/08/Netflix_icon.png" style={{ "height": "30px" }} alt="" />
                                </div>
                                <h5 class="mb-0 ms-3">{getOneresponse.source?.name}</h5>
                                <p class="mb-0 ms-3">{Math.round(((new Date() - new Date(getOneresponse?.publishedAt) % 86400000) % 3600000) / 60000)}</p>
                                {/* ((new Date() - new Date(getOneresponse?.publishedAt))/86400000)/} */}
                            </div>

                            <h4 class="mt-3">{getOneresponse.title}</h4>
                            <p>
                                {getOneresponse.description}
                            </p>
                            <div>
                                <span class="text-danger">Movies</span>
                                <span class="text-muted"> 4 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className="row ">
                        <h3 class="col-lg-6 text-start">Letest news</h3>
                        <p class="col-lg-6 text-end">See all </p>
                    </div>
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        {getresponse && getresponse.map((data) => (
                            <div class="col">
                                <div class="card">
                                    <img src={data.urlToImage} class="card-img-top" alt="News Image" />
                                    <div class="card-body">
                                        <div class="single-list d-flex align-items-center text-muted mb-2" style={{ fontSize: '10px' }}>
                                            <div class="list-icon">
                                                <img class="rounded-3" src="https://s3-ap-south-1.amazonaws.com/av-blog-media/wp-content/uploads/2018/08/Netflix_icon.png" style={{ "height": "15px" }} alt="" />
                                            </div>
                                            <span class="mb-0 ms-2">{data.source.name}</span>
                                            <p class="mb-0 ms-2">{data.publishedAt}</p>
                                        </div>
                                        <h5 class="card-title">{data.title}</h5>
                                        <p class="card-text">{data.description}</p>
                                        <a href={data.url} class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
            }


        </div>

    )
}

export default Templete
