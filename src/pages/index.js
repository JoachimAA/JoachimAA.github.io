import * as React from "react"
import StarterComponent from "../components/StarterComponent"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <StarterComponent/>
    </main>
  )
}

export default IndexPage
