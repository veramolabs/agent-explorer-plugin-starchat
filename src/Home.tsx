import React from 'react'
import { useParams } from 'react-router-dom'
import { Landing } from './Landing.js'

export const Home = () => {
  const { did } = useParams<{ did: string }>()
  if (!did) return null
  return <Landing did={did} />
}
