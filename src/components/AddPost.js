import { Add, AddAPhoto, EmojiEmotions, Image } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
})

const AddPost = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title='Delete'
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
      >
        <Fab color='primary' aria-label='add'>
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{ maxWidth: '100', width: 400, maxHeight: '100%' }}
          p={3}
          borderRadius={3}
          bgcolor={'background.default'}
          color={'text.primary'}
        >
          <Typography variant='h6' component='h2' textAlign='center'>
            Text in a modal
          </Typography>
          <UserBox>
            <Avatar
              src='https://material-ui.com/static/images/avatar/3.jpg'
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant='span'>
              John
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            multiline
            rows={4}
            placeholder='Whats on your mind.'
            variant='standard'
          />
          <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <AddAPhoto color='success' />
          </Stack>
          <ButtonGroup
            fullWidth
            variant='contained'
            aria-label='outlined primary button group'
          >
            <Button>Submit</Button>
            <Button onClick={(e) => setOpen(false)} color='warning'>
              Cancel
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default AddPost
