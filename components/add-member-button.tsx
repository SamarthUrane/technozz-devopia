'use client'
import React from 'react'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import { useSetMemberModal } from '@/store/use-member-modal'

const MemberButton = () => {
    const {open} = useSetMemberModal(); 
  return (
    <div>
      <Button onClick={open}>
                  <Plus />
                </Button>
    </div>
  )
}

export default MemberButton