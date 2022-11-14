import * as React from "react"
import Layout from "../../components/Layout";
import {graphql} from "gatsby";
import { StaticImage } from "gatsby-plugin-image"


export default function Products({data}) {
    const {title, description, copyright} = data.site.siteMetadata
    return <Layout>
        <div>
            <h2> Products </h2>
            <StaticImage src="../../assets/img.png" alt="A dinosaur" />
            {/*<span>{title}</span>*/}
            {/*<span>{description}</span>*/}
            {/*<span>{copyright}</span>*/}
        </div>
    </Layout>
}


export const query = graphql`
    query SiteDataQuery {
      site {
        siteMetadata{
          title
          description
          copyright
        }
      }
    }
`