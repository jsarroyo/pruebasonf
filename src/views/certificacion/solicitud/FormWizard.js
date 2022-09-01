import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography
} from '@mui/material'
import clsx from 'clsx'
import { Fragment, useState } from 'react'
import toast from 'react-hot-toast'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'
import StepperCustomDot from 'src/views/forms/form-wizard/StepperCustomDot'
import Categoria from './Categoria'
import Contacto from './Contactos'
import PersonaFisica from './PersonaFisica'
import PersonaJuridica from './PersonaJuridica'
import TipoPersona from './TipoPersona'

// ** Third Party Imports
import * as yup from 'yup'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Inmuebles from './Inmuebles'
import Documentos from './Documentos'
import Declaracion from './Declaracion'

const steps = [
  {
    title: 'Tipo de solicitante',
    subtitle: 'Seleccione el tipo de entidad que solicita la certificación.'
  },
  {
    title: 'Datos del solicitante',
    subtitle: 'Indique la información solicitada'
  },
  {
    title: 'Información de contacto',
    subtitle: 'Datos de la(s) persona(s) para contacto.'
  },
  {
    title: 'Categoría de certificación',
    subtitle: 'Seleccione el tipo de certificación que desea obtener.'
  },
  {
    title: 'Información de los inmuebles',
    subtitle: 'Según de la cantidad de inmubeles debe llenar la información.'
  },
  {
    title: 'Documentos a presentar',
    subtitle: 'Suba a la plataforma los documentos solicitados.'
  },
  {
    title: 'Declaración jurada',
    subtitle: 'Suba a la plataforma la declaración jurada firmada.'
  }
]

// ** Esquemas
const tipoPersonaSchema = yup.object().shape({
  tipo: yup.string().required()
})

const contactosSchema = yup.object().shape({
  correo: yup.string().email().required(),
  telefono: yup.number().required(),
  correo2: yup.string().email(),
  telefono2: yup.number()
})

const personaFisicaSchema = yup.object().shape({
  nombre: yup.string().required(),
  cedula: yup.string().required()
})

const personaJuridicaSchema = yup.object().shape({
  'nombre-juridica': yup.string().required(),
  'cedula-juridica': yup.string().required(),
  'nombre-representante': yup.string().required(),
  'cedula-representante': yup.string().required()
})

const categoriaSchema = yup.object().shape({
  categoria: yup.string().required()
})

const FormWizard = () => {
  // ** States
  const [activeStep, setActiveStep] = useState(0)

  // ** Hooks
  const {
    handleSubmit: handleTipoPersonaSubmit,
    formState: { errors: tipoPersonaErrors },
    control: tipoPersonaControl
  } = useForm({
    resolver: yupResolver(tipoPersonaSchema)
  })

  const {
    handleSubmit: handleCategoriaSubmit,
    formState: { errors: categoriaErrors },
    control: categoriaControl
  } = useForm({
    resolver: yupResolver(categoriaSchema)
  })

  const watchTipoPersona = useWatch({ control: tipoPersonaControl, name: 'tipo-persona' })

  const watchCategoria = useWatch({ control: categoriaControl, name: 'categoria' })

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
    if (activeStep === steps.length - 1) {
      toast.success('Form Submitted')
    }
  }

	const handleBackJump = (jump) => {
		if(activeStep > jump) {
			setActiveStep(jump)
		}
	}

  const handleSubmit = () => {
    // enviar solicitud
  }

  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <form key={0} onSubmit={handleTipoPersonaSubmit(handleNext)}>
            <Grid item xs={12} sm={6}>
              <Controller
                name='tipo-persona'
                rules={{ required: true }}
                control={tipoPersonaControl}
                render={({ field: { value, onChange } }) => (
                  <RadioGroup row aria-label='tipo-persona' name='tipo-persona' value={value} onChange={onChange}>
                    <FormControlLabel value='fisica' control={<Radio />} label='Persona física' />
                    <FormControlLabel value='juridica' control={<Radio />} label='Persona jurídica' />
                  </RadioGroup>
                )}
              ></Controller>
            </Grid>
          </form>
        )
      case 1:
        return watchTipoPersona === 'fisica' ? <PersonaFisica /> : <PersonaJuridica />
      case 2:
        return <Contacto />
      case 3:
        return (
          <form key={3} onSubmit={handleCategoriaSubmit(handleNext)}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id='categoria-label'>Categoría</InputLabel>
                  <Controller
                    name='categoria'
                    control={categoriaControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <Select label='Categoría' onChange={onChange} defaultValue='' id='categoria' labelId='categoria-label'>
												<MenuItem value={1}>Aprovechamiento individual (un único inmueble)</MenuItem>
												<MenuItem value={2}>
													Aprovechamiento grupal (dos o más inmuebles)
												</MenuItem>
												<MenuItem value={3}>Industrias de transformación primaria</MenuItem>
												<MenuItem value={4}>Comercializadores de madera aserrada con servicio de aserrío de terceros</MenuItem>
                      </Select>
                    )}
                  ></Controller>
                </FormControl>
              </Grid>
            </Grid>
          </form>
        )
			case 4:
				return <Inmuebles categoria={watchCategoria} persona={watchTipoPersona} />
			case 5:
				return <Documentos />
			case 6:
				return <Declaracion />
      default:
        return 'Unknown Step'
    }
  }

  return (
    <Card>
      <CardHeader title='Solicitud de inscripción' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((step, index) => {
              return (
                <Step key={index} className={clsx({ active: activeStep === index })}>
                  <StepLabel  StepIconComponent={StepperCustomDot}>
                    <div  className='step-label'>
                      <div>
                        <Typography onClick={() => handleBackJump(index)} style={{cursor: activeStep > index ? 'pointer' : 'default'}} className='step-title'>{step.title}</Typography>
                        <Typography className='step-subtitle'>{step.subtitle}</Typography>
                      </div>
                    </div>
                  </StepLabel>
                  <StepContent>
                    {getStepContent(activeStep)}
                    <div className='button-wrapper'>
                      <Button
                        size='small'
                        color='secondary'
                        variant='outlined'
                        onClick={handleBack}
                        disabled={activeStep === 0}
                      >
                        Atras
                      </Button>
                      <Button size='small' variant='contained' onClick={handleNext} sx={{ ml: 4 }}>
                        {activeStep === steps.length - 1 ? 'Enviar solicitud' : 'Siguiente'}
                      </Button>
 
                    </div>
                  </StepContent>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
        {activeStep === steps.length && (
         
          <Box sx={{ mt: 2 }}>
            <Typography>Todos los pasos han sido completados!</Typography>
            <Button size='small' sx={{ mt: 2 }} variant='contained' onClick={() => {}}>
              Enviar solicitud
            </Button>
          </Box>
            
        )}
      </CardContent>
    </Card>
  )
}

export default FormWizard
