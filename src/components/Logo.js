import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import KnifeLogo from "../images/logo-with-name.png"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Logo = () => {
  const logoData = useStaticQuery(graphql`
    query LogoQuery {
      imageSharp {
        id
      }
      file(relativePath: { eq: "logo-with-name.png" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)
  return (
    <Img
      style={{ maxWidth: "25rem", margin: "1rem auto" }}
      fluid={logoData.file.childImageSharp.fluid}
    />
  )
}

export default Logo
