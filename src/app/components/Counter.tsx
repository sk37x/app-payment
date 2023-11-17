'use client'
import React from 'react'

import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks'

import { decrement, increment } from '@/lib/redux/slices/counterSlice'
import { RootState } from '@/lib/redux/store'
import { Button } from '@mui/material'

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  
  // omit rendering logic

  return (
    <div>
        <div>{count}</div>
        <div className='flex'>
            <Button onClick={() => dispatch(increment())}>บวก</Button>
            <Button onClick={() => dispatch(decrement())}>ลบ</Button>
        </div>
    </div>
  )
}