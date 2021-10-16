import React from 'react'

function Loading(props) {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <h3 className="display-3 text-center">{props.title}</h3>
                </div>
            </div>
        </div>
    )
}

export default Loading
