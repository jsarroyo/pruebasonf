import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'

const Categoria = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id='categoria-label'>Categoría</InputLabel>
          <Select label='Categoría' id='categoria' labelId='categoria-label'>
            <MenuItem value={1}>Aprovechamiento individual (un único inmueble)</MenuItem>
            <MenuItem value={2}>
              Aprovechamiento grupal (dos o más inmuebles)
            </MenuItem>
            <MenuItem value={4}>Industrias de transformación primaria</MenuItem>
            <MenuItem value={5}>Comercializadores de madera aserrada con servicio de aserrío de terceros</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default Categoria
