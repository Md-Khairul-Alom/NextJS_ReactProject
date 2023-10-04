import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <h1>Services Page</h1>
<Link href="/services/hello">
    Go To
</Link>
    </div>
  )
}

export default page