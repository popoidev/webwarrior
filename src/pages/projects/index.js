import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { graphql, Link } from 'gatsby'
import { GatsbyImage  } from 'gatsby-plugin-image'

export default function Projects({ data }) {

    const projects = data.projects.edges
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
            <section className={ styles.portfolio }>
                <h2>Projects</h2>
                <h3>Projects & Websites I've created.</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus ad, tempore, vero maiores voluptatem optio rerum quidem rem porro et inventore doloribus quae nostrum amet quisquam saepe. Dolore, at repudiandae.</p>

                <div className={ styles.projects }>
                    { projects && projects.map( project => {
                        const { title, slug, stack, thumb } = project.node.frontmatter
                      
                        return (
                            <Link 
                                key={ project.node.id } 
                                to={ `/projects/${ slug }` }>
                                <div>
                                    <GatsbyImage image={ thumb.childImageSharp.gatsbyImageData } />
                                    <h3>{ title }</h3>
                                    <p>{ stack }</p>
                                </div>
                            </Link>
                        )
                    } ) }
                </div>

                <p>Like what you see ? You can email me at { contact } for a quoute.</p>
            </section>
        </Layout>
    )
}

export const query  = graphql`
    query Projects {
        projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        stack
                        slug
                        thumb {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
        contact: site {
            siteMetadata {
                contact
            }
        }
    }
`