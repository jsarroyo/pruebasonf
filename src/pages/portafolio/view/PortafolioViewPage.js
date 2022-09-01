// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'

// ** Third Party Components
import axios from 'axios'

// ** Demo Components Imports
import PortafolioViewLeft from '../shared/PortafolioViewLeft'
import PortafolioViewRight from '../shared/PortafolioViewRight' 

const PortafolioView = ({ id, invoiceData }) => {
  // ** State
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)
  useEffect(() => {
    axios
      .get('/apps/user', { params: { id } })
      .then(response => {
        setData(response.data)
        setError(false)
      })
      .catch(() => {
        setData(null)
        setError(true)
      })
  }, [id])
  if (data) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12} md={5} lg={4}>
          <PortafolioViewLeft data={data} />
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <PortafolioViewRight invoiceData={invoiceData} />
        </Grid>
      </Grid>
    )
  } else if (error) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Alert severity='error'>
            El portafolio con el id: {id} no existe. Por favor intente nuevamente:{' '}
            <Link href='/portafolio/list'>Lista de portafolios</Link>
          </Alert>
        </Grid>
      </Grid>
    )
  } else {
    return null
  }
}

export default PortafolioView
