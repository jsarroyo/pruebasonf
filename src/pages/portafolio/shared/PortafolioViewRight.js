// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import LinkVariant from 'mdi-material-ui/LinkVariant'
import AccountOutline from 'mdi-material-ui/AccountOutline'

// ** Demo Components Imports
import PortafolioViewOverview from './PortafolioViewOverview'
import PortafolioViewConnection from './PortafolioViewConnection'
import PortafolioViewSecurity from './PortafolioViewSecurity'


// ** Styled Tab component
const Tab = styled(MuiTab)(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  '& svg': {
    marginBottom: '0 !important',
    marginRight: theme.spacing(1)
  }
}))

const PortafolioViewRight = ({ invoiceData }) => {
  // ** State
  const [value, setValue] = useState('generales')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList
        variant='scrollable'
        scrollButtons='auto'
        onChange={handleChange}
        aria-label='forced scroll tabs example'
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Tab value='generales' label='Generales' icon={<AccountOutline sx={{ fontSize: '18px' }} />} /> 
        <Tab value='qrcode' label='Codigo QR' icon={<LinkVariant sx={{ fontSize: '18px' }} />} />
        <Tab value='connection' label='Redes' icon={<LinkVariant sx={{ fontSize: '18px' }} />} />
      </TabList>
      <Box sx={{ mt: 3 }}>
        
        <TabPanel sx={{ p: 0 }} value='generales'>
          <PortafolioViewOverview invoiceData={invoiceData} />
        </TabPanel>
         
        <TabPanel sx={{ p: 0 }} value='connection'>
          <PortafolioViewConnection />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='qrcode'>
          <PortafolioViewSecurity />
        </TabPanel>

      </Box>
    </TabContext>
  )
}

export default PortafolioViewRight
