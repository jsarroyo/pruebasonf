// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DeleteOutline from 'mdi-material-ui/DeleteOutline'
import LinkVariant from 'mdi-material-ui/LinkVariant'

// ** Styled component for the Facebook image
const Img = styled('img')(({ theme }) => ({
  marginLeft: theme.spacing(1.75),
  marginRight: theme.spacing(1.75)
}))

const CategoriaViewConnection = () => {
  return (
    <Fragment>
        
      <Card>
        <CardHeader
          title='Redes Sociales'
          titleTypographyProps={{ variant: 'h6' }}
          subheaderTypographyProps={{ variant: 'body2' }}
          subheader='Cuentas asociadas al categoria'
        />
        <CardContent>
          <Box
            sx={{
              mb: 6,
              mt: 2.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Img height='35' alt='Facebook' src='/images/logos/facebook.png' />
              <Box sx={{ ml: 4 }}>
                <Typography sx={{ fontWeight: 600 }}>Facebook</Typography>
                <Typography variant='body2'>Not connected</Typography>
              </Box>
            </Box>
            <Button color='secondary' sx={{ p: 2, minWidth: 38 }}>
              <LinkVariant />
            </Button>
          </Box>

          <Box sx={{ display: 'flex', mb: 6, alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Img width='35' height='35' alt='Twitter' src='/images/logos/twitter.png' />
              <Box sx={{ ml: 4 }}>
                <Typography sx={{ fontWeight: 600 }}>Twitter</Typography>
                <Typography variant='body2'>@Theme_Selection</Typography>
              </Box>
            </Box>
            <Button color='secondary' sx={{ p: 2, minWidth: 38 }}>
              <DeleteOutline />
            </Button>
          </Box>

          <Box sx={{ display: 'flex', mb: 6, alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Img width='35' height='35' alt='LinkedIn' src='/images/logos/linkedin.png' />
              <Box sx={{ ml: 4 }}>
                <Typography sx={{ fontWeight: 600 }}>LinkedIn</Typography>
                <Typography variant='body2'>@Pixinvent</Typography>
              </Box>
            </Box>
            <Button color='secondary' sx={{ p: 2, minWidth: 38 }}>
              <DeleteOutline />
            </Button>
          </Box>

          <Box sx={{ display: 'flex', mb: 6, alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Img width='35' height='35' alt='Dribbble' src='/images/logos/dribbble.png' />
              <Box sx={{ ml: 4 }}>
                <Typography sx={{ fontWeight: 600 }}>Dribbble</Typography>
                <Typography variant='body2'>Not connected</Typography>
              </Box>
            </Box>
            <Button color='secondary' sx={{ p: 2, minWidth: 38 }}>
              <LinkVariant />
            </Button>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Img width='35' height='35' alt='Behance' src='/images/logos/behance.png' />
              <Box sx={{ ml: 4 }}>
                <Typography sx={{ fontWeight: 600 }}>Behance</Typography>
                <Typography variant='body2'>Not connected</Typography>
              </Box>
            </Box>
            <Button color='secondary' sx={{ p: 2, minWidth: 38 }}>
              <LinkVariant />
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Fragment>
  )
}

export default CategoriaViewConnection
