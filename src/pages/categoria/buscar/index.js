// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid' 


// ** React Imports 

// ** MUI Imports 
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid' 
import Switch from '@mui/material/Switch'  
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton' 
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControlLabel from '@mui/material/FormControlLabel'
import Select from '@mui/material/Select'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import AccountOutline from 'mdi-material-ui/AccountOutline'


// ** Third Party Components
import toast from 'react-hot-toast'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Data Import
import { rows } from 'src/@fake-db/table/static-data-categorias'
import { rows_precios } from 'src/@fake-db/table/static-data-categorias-precios'
import Fade from '@mui/material/Fade'

// ** renders client column
const renderClient = params => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]
   
    return (
      <CustomAvatar skin='light' color={color} sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}>
        {getInitials(row.categoria ? row.categoria : 'John Doe')}
      </CustomAvatar>
    )
   
}

const columnsPrecios = [
  {
    flex: 0.1,
    field: 'id',
    minWidth: 80,
    headerName: 'ID'
  },
  {
    flex: 0.25,
    minWidth: 80,
    editable: true,
    type: 'number',
    field: 'cantidad_desde',
    headerName: 'Volumen/Hectareas Desde'
  },
  {
    flex: 0.25,
    minWidth: 80,
    type: 'number',
    editable: true,
    field: 'cantidad_hasta',
    headerName: 'Volumen/Hectareas Hasta'
  },
  {
    flex: 0.25,
    minWidth: 80,
    type: 'decimal',
    field: 'visitas_minimas',
    editable: true,
    headerName: 'Cant. Visitas Mínimas'
  },
  {
    flex: 0.15,
    type: 'number',
    minWidth: 80,
    editable: true,
    field: 'anio_1',
    headerName: '1 año'
  },
  {
    flex: 0.15,
    minWidth: 80,
    type: 'number',
    editable: true,
    field: 'anio_2',
    headerName: '2 años'
  },
  {
    flex: 0.1,
    field: 'anio_3',
    minWidth: 80,
    type: 'number',
    editable: true,
    headerName: '3 años'
  },
  {
    flex: 0.1,
    field: 'anio_5',
    minWidth: 80,
    type: 'number',
    editable: true,
    headerName: '5 años'
  },
  {
    flex: 0.1,
    field: 'anio_10',
    minWidth: 80,
    type: 'number',
    editable: true,
    headerName: '10 años'
  },
  {
    flex: 0.1,
    field: 'visita_adicional',
    minWidth: 80,
    type: 'number',
    editable: true,
    headerName: 'Visita Adicional'
  }
]

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

const statusObj = {
  1: { title: 'current', color: 'primary' },
  2: { title: 'professional', color: 'success' },
  3: { title: 'rejected', color: 'error' },
  4: { title: 'resigned', color: 'warning' },
  5: { title: 'applied', color: 'info' }
}

// ** Full Name Getter
const getFullName = params =>
  toast(
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {renderClient(params)}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
          {params.row.categoria}
        </Typography>
      </Box>
    </Box>
  )

const BuscarCategoria = () => {
  // ** States
  const [show, setShow] = useState(false)
  const [pageSize, setPageSize] = useState(7)
  const [hideNameColumn, setHideNameColumn] = useState(false)
  const [languages, setLanguages] = useState([])
  
  const handleChange = event => {
    const {
      target: { value }
    } = event
    setLanguages(typeof value === 'string' ? value.split(',') : value)
  }

  const columns = [
    {
      flex: 0.25,
      minWidth: 290,
      field: 'categoria',
      headerName: 'Categoría',
      hide: hideNameColumn,
      renderCell: params => {
        const { row } = params

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {renderClient(params)}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
                {row.categoria}
              </Typography>
              <Typography noWrap variant='caption'>
                {row.sub_categoria_2}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.175,
      minWidth: 120,
      headerName: 'Sub-Categoría',
      field: 'sub_categoria',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.sub_categoria}
        </Typography>
      )
    },
    {
      flex: 0.15,
      minWidth: 110,
      field: 'sub_categoria_2',
      headerName: 'Sub-Categoría-2',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.sub_categoria_2}
        </Typography>
      )
    },
    {
      flex: 0.1,
      field: 'modalidad',
      minWidth: 80,
      headerName: 'Modalidad',
      renderCell: params => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.modalidad}
        </Typography>
      )
    },
    {
      flex: 0.2,
      minWidth: 140,
      field: 'status',
      headerName: 'Precios',
      renderCell: params => {
        const status = statusObj[params.row.status]

        return ( 
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.modalidad}
        </Typography>
        )
      }
    },
    {
      flex: 0.125,
      minWidth: 140,
      field: 'actions',
      headerName: 'Acciones',
      renderCell: params => {
        return (
           
          <Card> 
         
        <Button variant='contained' onClick={() => setShow(true)}>
          Fijar Precios
        </Button> 
      <Dialog
        fullWidth
        open={show}
        maxWidth='md'
        scroll='body'
        onClose={() => setShow(false)}
        TransitionComponent={Transition}
        onBackdropClick={() => setShow(false)}
      >
        <DialogContent sx={{ pb: 6, px: { xs: 8, sm: 15 }, pt: { xs: 8, sm: 12.5 }, position: 'relative' }}>
          <IconButton
            size='small'
            onClick={() => setShow(false)}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <Close />
          </IconButton>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant='h5' sx={{ mb: 3, lineHeight: '2rem' }}>
              Editar precios establecidos
            </Typography>
            <Typography variant='body2'>La actualización de precios se refleja en solicitudes no aprobadas.</Typography>
          </Box>
          <Card>
            <CardHeader title='Editable' />
            <Box sx={{ height: 500 }}>
                <DataGrid columns={columnsPrecios} rows={rows_precios.slice(0, 10)} />
            </Box>
            </Card>
            
        </DialogContent>
        <DialogActions sx={{ pb: { xs: 8, sm: 12.5 }, justifyContent: 'center' }}>
          <Button variant='contained' sx={{ mr: 2 }} onClick={() => setShow(false)}>
            Actualizar
          </Button>
          <Button variant='outlined' color='secondary' onClick={() => setShow(false)}>
            Discartar
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
        )
      }
    }
  ]

  return (
    <Card>
      <CardHeader
        title='Configuración de categorías'
         
      />
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        disableSelectionOnClick
        rowsPerPageOptions={[7, 10, 25, 50]}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
      />
    </Card>
  )
}

export default BuscarCategoria
