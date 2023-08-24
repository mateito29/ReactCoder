import { Box, Divider, Flex } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
  return (
    <div>
    <Flex>
    <Box>
    <div className='carrito-icono'>🛒</div>
    </Box>
    <Divider/>
    <Box>
    <h1 className='carrito-numero'>6</h1>
    </Box>
    </Flex>
    </div>
  )
}

export default CartWidget