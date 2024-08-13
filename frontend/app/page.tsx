import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="default-page">
        <div className="link-container">
            <Link href="/sign_up" className="nav-link">Sign Up</Link>
            <Link href="/login" className="nav-link">Log In</Link>
            <Link href="/dashboard" className="nav-link">Dashboard</Link>
            <Link href="/settings" className="nav-link">Settings</Link>
        </div>
    </div>
  )
}

export default page