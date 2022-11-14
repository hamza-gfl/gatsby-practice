import * as React from "react"
import {graphql, useStaticQuery} from "gatsby";

export default function Footer() {
    const {site} = useStaticQuery(graphql`
        query {
          site {
            siteMetadata{
              copyright
            }
          }
        }
    `)
    return <div>
        <h2> Footer</h2>
        <span>{site.siteMetadata.copyright}</span>
    </div>
}
