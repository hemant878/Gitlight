import React from 'react'
import '../Css/Page.css'

function Rating({ value }) {
    return (
        <div className='rating'>
            <span>

                {value === 5 ?
                    <div className="aimg" >
                        <span style={{ fontSize: '150%', color: '#f5961d' }}>★</span>
                        <span style={{ fontSize: '150%', color: '#f5961d' }}>★</span>
                        <span style={{ fontSize: '150%', color: '#f5961d' }}>★</span>
                        <span style={{ fontSize: '150%', color: '#f5961d' }}>★</span>
                        <span style={{ fontSize: '150%', color: '#f5961d' }}>★</span>

                    </div>
                    :
                    <div className="aimg">
                        <span></span>


                    </div>
                }

            </span>



            <span>

                {value === 4 ?
                    <div className="aimg">
                    <span style={{ fontSize: '150%', color: '#f5961d' }}>★</span>
                    <span style={{ fontSize: '150%', color: '#f5961d' }}>★</span>
                    <span style={{ fontSize: '150%', color: '#f5961d' }}>★</span>
                    <span style={{ fontSize: '150%', color: '#f5961d' }}>★</span>

                    </div>
                    :
                    <div className="aimg">
                        <span></span>


                    </div>
                }

            </span>



            <span>

                {value === 3 ?
                    <div className="aimg">
                    <span style={{ fontSize: '150%', color: '#f5961d' }}>★</span>
                    <span style={{ fontSize: '150%', color: '#f5961d' }}>★</span>
                    <span style={{ fontSize: '150%', color: '#f5961d' }}>★</span>

                    </div>
                    :
                    <div className="aimg">
                        <span></span>


                    </div>
                }

            </span>



            <span>

                {value === 2 ?
                    <div className="aimg">
                    <span style={{ fontSize: '150%', color: '#f5961d' }}>★</span>
                    <span style={{ fontSize: '150%', color: '#f5961d' }}>★</span>

                    </div>
                    :
                    <div className="aimg">
                        <span></span>


                    </div>
                }

            </span>




            <span>

                {value === 1 ?
                    <div className="aimg">
                    <span style={{ fontSize: '150%', color: '#f5961d' }}>★</span>

                    </div>
                    :
                    <div className="aimg">
                        <span></span>


                    </div>
                }

            </span>




        </div>
    )
}

export default Rating
