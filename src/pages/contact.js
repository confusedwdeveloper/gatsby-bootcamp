import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

export default function ContactPage() {
  return (
    <Layout>
      <Head title="Contact" />
      <h4>Contact me</h4>
      <p>email: darshandatta.10@gmail.com</p>
      <p>
        Twitter:{" "}
        <a href="https://twitter.com" target="_blank">
          Twitter
        </a>
      </p>
    </Layout>
  )
}
