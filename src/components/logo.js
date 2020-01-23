import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
    query Logo {
      imageSharp {
        id
      }
      file(relativePath: { eq: "logo-without-name.png" }) {
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
    <div className='navigation_logo-container'>
      <Img
        fadeIn={false}
        critical
        style={{ margin: '1rem auto', position: 'initial' }}
        fluid={logoData.file.childImageSharp.fluid}
      />
    </div>
  )
}

export default Logo
