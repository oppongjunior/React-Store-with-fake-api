import React from 'react'

function Error(props) {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12 text-center">
                    <div className="alert alert-danger" role="alert">
                        {props.title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error
