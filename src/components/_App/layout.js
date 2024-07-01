/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { RecoilRoot } from "recoil"
import AOS from "aos"
import GoTop from "./GoTop"

const Layout = ({ children }) => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <RecoilRoot>
        <main>{children}</main>

        <GoTop scrollStepInPx="100" delayInMs="10.50" />
      </RecoilRoot>
    </>
  )
}

export default Layout
