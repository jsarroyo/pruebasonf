// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// ** Icons Imports
import ExportVariant from 'mdi-material-ui/ExportVariant'

const CategoriaTableHeader = props => {
  // ** Props
  const { handleFilter, toggle, value } = props

  return (
    <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Button sx={{ mr: 4, mb: 2 }} color='secondary' variant='outlined' startIcon={<ExportVariant fontSize='small' />}>
        Exportar
      </Button>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={value}
          sx={{ mr: 6, mb: 2 }}
          placeholder='Buscar'
          onChange={e => handleFilter(e.target.value)}
        />

        {/* <Button sx={{ mb: 2 }} onClick={toggle} variant='contained'>
          Agregar
        </Button> */}
      </Box>
    </Box>
  )
}

export default CategoriaTableHeader
