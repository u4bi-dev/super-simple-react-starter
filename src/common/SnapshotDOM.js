import React from 'react';

export default ({ href, title }) => (
    <div>
        <a href={ href }>
            <h1>
                { title }
            </h1>
        </a>
    </div>
);