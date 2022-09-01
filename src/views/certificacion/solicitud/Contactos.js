import { Grid, TextField, Typography } from "@mui/material"

const Contacto = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Correo electrónico' placeholder='name@example.com' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Teléfono' placeholder='0000-0000' />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body2' sx={{ fontWeight: 600 }}>
          Contacto alternativo
        </Typography>
      </Grid>
			<Grid item xs={12} sm={6}>
        <TextField fullWidth label='Correo electrónico' placeholder='name@example.com' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Teléfono' placeholder='0000-0000' />
      </Grid>
    </Grid>
  )
}

export default Contacto
