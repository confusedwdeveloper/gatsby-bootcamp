import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default function AboutPage() {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        I am a front end developer living in beautiful state of Assam in India.
        My hobbis are reading novels and chess.
      </p>
      <p>
        <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}
