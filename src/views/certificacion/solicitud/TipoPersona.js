import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { Fragment, useState } from "react";

const TipoPersona = () => {
	const [persona, setPersona] = useState('fisica');
	return ( 
		<form key={0} onSubmit={e => e.preventDefault()}>
			<Grid item xs={12} sm={6}>
				<RadioGroup row aria-label="tipo-persona" name="tipo-persona" value={persona} onChange={e => setPersona(e.target.value)}>
					<FormControlLabel value='fisica' control={<Radio />} label='Persona física' />
					<FormControlLabel value='juridica' control={<Radio />} label='Persona jurídica' />
				</RadioGroup>
			</Grid>
		</form>
	 );
}
 
export default TipoPersona;