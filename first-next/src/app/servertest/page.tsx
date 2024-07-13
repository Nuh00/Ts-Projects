import React from 'react'
import {sayHello} from "../../../lib/action"

function page() {
  return (
    <div>
      <form action={sayHello}>
        <button>Test me</button>
      </form>
    </div>
  )
}

export default page
