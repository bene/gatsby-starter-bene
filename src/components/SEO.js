import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

export default function SEO({ lang = "en", title, description }) {
    const { siteName } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteName
                }
            }
        }
    `).site.siteMetadata

    return (
        <Helmet
            titleTemplate={`%s | ${siteName}`}
            htmlAttributes={{
                lang,
            }}
        >
            {!!title && <title>{title}</title>}
            {!!description && (
                <>
                    <meta name="description" content={description} />
                    <meta name="twitter:description" content={description} />
                    <meta name="og:description" content={description} />
                </>
            )}
        </Helmet>
    )
}
