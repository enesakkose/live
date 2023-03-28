import React from 'react'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

function ChevronBtn({...props}) {
  return (
    <Button {...props}>
      <Icon icon='chevron' size={20} />
    </Button>
  )
}

export default ChevronBtn
