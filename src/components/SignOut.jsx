import { HamburgerIcon, PhoneIcon, } from '@chakra-ui/icons'
import { Button,useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'

import { auth } from '../firebase'
import { TalkDrawer } from '../components/Drawers/TalkDrawer'

function SignOut() {
	const {isOpen, onOpen, onClose} = useDisclosure();


  	return (
    	<div className='header'>
        	<Button style={{color: "red", fontSize: "15px"}} onClick={() => auth.signOut()}>サインアウト</Button>
        	<h3>{auth.currentUser.displayName}</h3>
        	<div>
        		<PhoneIcon pd={10} />
        		<HamburgerIcon onClick={onOpen} _hover={{cursor: "pointer"}} /> 
        	</div>
			<TalkDrawer onClose={onClose} isOpen={isOpen} />
    	</div>
  	)
}

export default SignOut