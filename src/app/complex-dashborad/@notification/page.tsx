import Card from '@/component/card'
import Link from 'next/link'
import React from 'react'

export default function Notification() {
  return (
    <Card>
        <h3>Notification</h3>
        <div>
            <Link href='/complex-dashboard/archived'>Archived</Link>
            <Link href='/complex-dashboard/completed'>Completed</Link>
        </div>
    </Card>
  )
}
