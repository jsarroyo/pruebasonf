import { Grid, TextField, Typography } from '@mui/material'

const PersonaJuridica = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Nombre de la persona jurídica' placeholder='Alphabet Inc.' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Cédula jurídica' placeholder='0000000000' />
      </Grid>
			<Grid item xs={12}>
        <Typography variant='body2' sx={{ fontWeight: 600 }}>
          Representante legal
        </Typography>
      </Grid>
			<Grid item xs={12} sm={6}>
        <TextField fullWidth label='Nombre del representante legal' placeholder='John Doe' />
      </Grid>
			<Grid item xs={12} sm={6}>
				<TextField fullWidth label='Cédula del representante legal' placeholder="0 0000 0000" />
			</Grid>
    </Grid>
  )
}

export default PersonaJuridica
