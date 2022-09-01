import {
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
  Button,
  RadioGroup,
  Radio,
  InputAdornment,
  Card,
  CardContent,
  CardHeader,
  IconButton
} from '@mui/material'

import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import { Close } from 'mdi-material-ui'
import { useEffect, useState } from 'react'

const Inmuebles = ({ persona, categoria }) => {
  
	const [listaInmuebles, setListaInmuebles] = useState([<InmuebleRender key={0} index={0} categoria={categoria} persona={persona} />]);

	const handleAgregarInmueble = () => {
		setListaInmuebles(listaInmuebles.concat(<InmuebleRender quitarInmueble={(item) => handleQuitarInmueble(item)} key={listaInmuebles.length} index={listaInmuebles.length} categoria={categoria} persona={persona} />))
	}

	const handleQuitarInmueble = (item) => {
		if(listaInmuebles.length > 2)
		setListaInmuebles(listaInmuebles.splice(item, 1))
	}

  return (
    <>
      {listaInmuebles}
      <Grid container spacing={5}>
        {categoria == '2' ? (
          <>
            <Grid item xs={12} sm={12}>
              <Button onClick={handleAgregarInmueble} variant='contained'>Agregar otro inmueble</Button>
            </Grid>
          </>
        ) : null}
      </Grid>
    </>
  )
}

const InmuebleRender = ({ categoria, persona, index, quitarInmueble}) => {
  const [esPropietario, setEsPropietario] = useState('no')

  const handleEsPropietario = event => {
    setEsPropietario(event.target.value)
  }





  return (
		<Card style={{ marginBottom: '20px' }}>
		<CardHeader
			// title={index}
			action={
				categoria == '2' && index !== 0 ? (
					<IconButton onClick={() => quitarInmueble(index)} size='small' aria-label='collapse' sx={{ color: 'text.secondary' }}>
						<Close fontSize='small' />
					</IconButton>
				) : null
			}
		/>
		<CardContent>
			<Grid container spacing={5}>
				{persona === 'juridica' ? (
					<Grid item xs={12}>
						<TextField fullWidth label='Nombre comercial o de fantasía' />
					</Grid>
				) : null}
				<Grid item xs={12}>
					<TextField fullWidth label='Nombre comercial o de fantasía' />
				</Grid>
				<Grid item xs={12}>
					<TextField fullWidth label='Dirección exacta' />
				</Grid>
				<Grid item xs={12} sm={12}>
					<TextField fullWidth label='Folio real' />
				</Grid>

				<Grid item xs={12}>
					<Typography variant='body2' sx={{ fontWeight: 600 }}>
						¿El solicitante es el propietario del inmueble?
					</Typography>
					<RadioGroup
						value={esPropietario}
						onChange={handleEsPropietario}
						row
						aria-label='tipo-persona'
						name='tipo-persona'
					>
						<FormControlLabel value='no' control={<Radio />} label='Sí' />
						<FormControlLabel value='si' control={<Radio />} label='No' />
					</RadioGroup>
				</Grid>
				{/* Si el solicitante es el propietario */}

				{esPropietario === 'si' ? (
					<>
						<Grid item xs={12}>
							<Typography variant='body2' sx={{ fontWeight: 600 }}>
								Tipo de propietario del inmueble
							</Typography>
							<RadioGroup row aria-label='tipo-persona' name='tipo-persona'>
								<FormControlLabel value='fisica' control={<Radio />} label='Persona física' />
								<FormControlLabel value='juridica' control={<Radio />} label='Persona jurídica' />
							</RadioGroup>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField fullWidth label='Nombre de la persona física o juridica dueña de la propiedad' />
						</Grid>

						<Grid item xs={12} sm={6}>
							<TextField fullWidth label='Cédula de la persona física o juridica dueña de la propiedad' />
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormControl fullWidth>
								<InputLabel id='dominio-propiedad-label'>Dominio de propiedad</InputLabel>
								<Select label='Dominio de propiedad' id='dominio-propiedad' labelId='dominio-propiedad-label'>
									<MenuItem value={1}>Alquilado</MenuItem>
									<MenuItem value={2}>Prestado</MenuItem>
									<MenuItem value={3}>Otro. Indicar</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</>
				) : null}

				{categoria == '1' || categoria == '2' ? <InmuebleAprovechamiento /> : null}

				{
					{
						'3': (
							<>
								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										label='N° de Resolución registro de industrias de SINAC'
										placeholder='12341234'
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										label='N° de Resolución Viabilidad Ambiental de SETENA'
										placeholder='12341234'
									/>
								</Grid>
							</>
						),
						'4': (
							<>
								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										label='N° de Resolución Viabilidad Ambiental de SETENA'
										placeholder='12341234'
									/>
								</Grid>
							</>
						)
					}[categoria]
				}
			</Grid>
		</CardContent>
	</Card>
	)
}

const InmuebleAprovechamiento = () => {
  const [producto, setProducto] = useState(false)
  const [proyecto, setProyecto] = useState(false)

  const [conPSA, setConPSA] = useState('con')

  const [modalidad, setModalidad] = useState('')

  const handleModalidad = event => {
    setModalidad(event.target.value)
  }

  const handleConPSA = event => {
    setConPSA(event.target.value)
  }

  const handleSubcategoriaProducto = event => {
    setProducto(event.target.checked)
  }
  const handleSubcategoriaProyecto = event => {
    setProyecto(event.target.checked)
  }

  return (
    <>
      <Grid item xs={12}>
        <Typography variant='body2' sx={{ fontWeight: 600 }}>
          Elija la(s) subcategoría(s)
        </Typography>
        <FormGroup row>
          <FormControlLabel
            label='Producto'
            control={<Checkbox checked={producto} onChange={handleSubcategoriaProducto} name='subcategoriainmuble2' />}
          />
          <FormControlLabel
            label='Proyecto'
            control={<Checkbox checked={proyecto} onChange={handleSubcategoriaProyecto} name='subcategoriainmueble2' />}
          />
        </FormGroup>
      </Grid>

      {producto === true ? (
        <>
          <Grid item xs={12}>
            <Typography variant='body2' sx={{ fontWeight: 600 }}>
              Elija la modalidad del producto
            </Typography>
            <RadioGroup row aria-label='tipo-persona' name='modalidad-producto'>
              <FormControlLabel value='plantaciones' control={<Radio />} label='Plantaciones forestales' />
              <FormControlLabel value='terrenos' control={<Radio />} label='Terrenos de uso agropecuario sin bosque' />
              <FormControlLabel value='bosques' control={<Radio />} label='Bosques' />
            </RadioGroup>
          </Grid>

          <Grid item xs={12}>
            {/* <Typography variant='body2' sx={{ fontWeight: 600 }}>
										Indicar el volumen (m3) del producto
								</Typography> */}
            <TextField fullWidth id='icons-start-adornment' label='Indicar el volumen del producto (m3)' />
          </Grid>
        </>
      ) : null}

      {proyecto === true ? (
        <>
          <Grid item xs={12}>
            <Typography variant='body2' sx={{ fontWeight: 600 }}>
              Elija la modalidad del proyecto
            </Typography>
            <RadioGroup
              value={modalidad}
              onChange={handleModalidad}
              row
              aria-label='tipo-persona'
              name='modalidad-proyecto'
            >
              <FormControlLabel value='plantaciones' control={<Radio />} label='Plantaciones forestales' />
              <FormControlLabel value='bosques' control={<Radio />} label='Bosques' />
            </RadioGroup>
          </Grid>

          {modalidad == 'bosques' ? (
            <>
              <Grid item xs={12}>
                <RadioGroup
                  row
                  value={conPSA}
                  onChange={handleConPSA}
                  aria-label='tipo-persona'
                  name='submodalidad-proyecto'
                >
                  <FormControlLabel value='con' control={<Radio />} label='Con PSA' />
                  <FormControlLabel value='sin' control={<Radio />} label='Sin PSA' />
                </RadioGroup>
              </Grid>
              {conPSA == 'con' ? (
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    Elija el tipo de PSA del proyecto
                  </Typography>
                  <RadioGroup row aria-label='tipo-persona' name='modalidad-proyecto'>
                    <FormControlLabel value='plantaciones' control={<Radio />} label='Protección de bosque' />
                    <FormControlLabel value='con-psa' control={<Radio />} label='Protección post cosecha' />
                  </RadioGroup>
                </Grid>
              ) : null}
            </>
          ) : null}

          <Grid item xs={12}>
            {/* <Typography variant='body2' sx={{ fontWeight: 600 }}>
										Indicar el area (hectareas) del proyecto
								</Typography> */}
            <TextField
              fullWidth
              id='icons-start-adornment'
              label='Indicar el area del proyecto a certificar (Hectareas)'
            />
          </Grid>
        </>
      ) : null}
    </>
  )
}

export default Inmuebles
