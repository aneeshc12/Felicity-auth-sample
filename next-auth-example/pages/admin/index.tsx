import Layout from "../../components/layout"

export default function Page() {
  return (
    <Layout>
      <p>
        This page is protected by middleware. Only admins should be able to access this page.
      </p>
    </Layout>
  )
}
