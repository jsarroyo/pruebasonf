import { Grid, TextField } from "@mui/material";

const PersonaFisica = () => {
	return ( 
		<Grid container spacing={5}>
			<Grid item xs={12} sm={6}>
				<TextField fullWidth label='Nombre' placeholder="Jhon Doe" />
			</Grid>
			<Grid item xs={12} sm={6}>
				<TextField fullWidth label='Cédula' placeholder="0 0000 0000" />
			</Grid>
		</Grid>
	 );
}
 
export default PersonaFisica;