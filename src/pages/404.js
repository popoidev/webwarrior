import React from 'react'
import Layout from '../components/Layout'

export default function Error404() {
    return (
        <Layout>
            <section>
                <h1>404 Error</h1>
                <h3>Page not found.</h3>
                <p>The resource requested could not be found on this server.</p>
            </section>
        </Layout>
    )
}
