import { Metadata } from 'next'
import Count from './counter'

export const metaedata:Metadata ={
    title:{
        default:'For all route if not defien',
        absolute:'%s | follyb',
        template:'The only name folly'
    }
    // title:'this is using cleinet in server component'
}
export default function Counter() {
  return <Count/>
}
