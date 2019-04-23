import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is:{props.info}</p>
    </div>
);


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please log in to view info</p>
            ) }
        </div>
    )
};

const Authenticated = requireAuthentication(Info) 

ReactDom.render(<Authenticated isAuthenticated={true} info="Here are the details" />, document.getElementById('app'));