import React from 'react'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

function BackBtn({ ...props }) {
  return (
    <Button {...props}>
      <Icon icon='left' size={30} />
    </Button>
  )
}

export default BackBtn