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

const MyPhoto = () => {
  const logoData = useStaticQuery(graphql`
    query MyPhoto {
      imageSharp {
        id
      }
      file(relativePath: { eq: "puppy.jpg" }) {
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
    <div className='homepage_my-photo-container'>
      <Img
        style={{ margin: '1rem auto', position: 'initial' }}
        fluid={logoData.file.childImageSharp.fluid}
      />
    </div>
  )
}

export default MyPhoto
