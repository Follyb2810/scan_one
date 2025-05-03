import Card from '@/component/card'
import Link from 'next/link'
import React from 'react'

export default function Archived() {
  return (
    <Card>
    <h3>Notification</h3>
    <div>
        <Link href='/complex-dashboard'>Default</Link>
    </div>
</Card>
  )
}
