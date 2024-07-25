import React from 'react';
import { graphql } from 'gatsby';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

const Lang = ({ title }) => {
    const { languages, originalPath } = useI18next();
    return (
        <><h1 style={{ margin: 0 }}>
            <Link
                to="/"
                style={{
                    color: `white`,
                    textDecoration: `none`
                }}>
                {title}
            </Link>
        </h1><ul className="languages">
                {languages.map((lng) => (
                    <li key={lng}>
                        <Link to={originalPath} language={lng}>
                            {lng}
                        </Link>
                    </li>
                ))}
            </ul></>
    );
};

export default Lang;