import React from "react";

const Marks=(props)=>{
    return(
        <div className="columns user-item">
                <div className="column is-10">
                    <div className="columns">
                        <div className="column">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">
                                        {props.userName}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <span className="title  is-6">
                                {props.marks}
                            </span>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Marks;