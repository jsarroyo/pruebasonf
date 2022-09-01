// ** MUI Imports
import { Grid, Typography } from "@mui/material";
import FormWizard from "src/views/certificacion/solicitud/FormWizard";

// ** Components Imports



const SolicitudWizard = () => {
	return ( 
		<Grid container spacing={6}>
			<Grid item xs={12}>
				<FormWizard />
			</Grid>
		</Grid>
	 );
}
 
export default SolicitudWizard;