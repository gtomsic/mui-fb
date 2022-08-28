import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post image='https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?cs=srgb&dl=pexels-frans-van-heerden-624015.jpg&fm=jpg' />
      <Post image='https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-1028225.jpg&fm=jpg' />
      <Post image='https://images.pexels.com/photos/1262803/pexels-photo-1262803.jpeg?cs=srgb&dl=pexels-diana-dor%C4%8D%C3%A1kov%C3%A1-1262803.jpg&fm=jpg' />
    </Box>
  )
}

export default Feed
