import React from "react"
import { MDXProvider } from "@mdx-js/react"
import SEO from "../components/SEO"

export default function BlogPostTemplate({ children, pageContext }) {
    const { title, excerpt, tags } = pageContext.frontmatter

    return (
        <>
            <SEO title={title} description={excerpt} />
            <MDXProvider>{children}</MDXProvider>
            <div className="flex gap-2">
                {tags.map(t => (
                    <span key={t}>{t}</span>
                ))}
            </div>
        </>
    )
}
