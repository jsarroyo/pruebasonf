// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Alert from '@mui/material/Alert'
import MuiLink from '@mui/material/Link'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icons Imports
import Google from 'mdi-material-ui/Google'
import Github from 'mdi-material-ui/Github'
import Twitter from 'mdi-material-ui/Twitter'
import Facebook from 'mdi-material-ui/Facebook'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// ** Styled Components
const LoginIllustrationWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(20),
  paddingRight: '0 !important',
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(10)
  }
}))

const LoginIllustration = styled('img')(({ theme }) => ({
  maxWidth: '48rem',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '38rem'
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '30rem'
  }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 400
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 450
  }
}))

const BoxWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: '0.18px',
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) }
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required()
})

const defaultValues = {
  password: 'admin',
  email: 'admin@oficinaforestalcr.org'
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgClasses = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const { email, password } = data
    auth.login({ email, password }, () => {
      setError('email', {
        type: 'manual',
        message: 'Email or Password is invalid'
      })
    })
  }
  const imageSource = skin === 'bordered' ? 'auth-v2-login-illustration-bordered' : 'auth-v2-login-illustration'

  return (
    <Box className='content-right'>
      {!hidden ? (
        <Box sx={{ flex: 1, display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
          <LoginIllustrationWrapper>
            
          </LoginIllustrationWrapper>
           
        </Box>
      ) : null}
      <RightWrapper sx={skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}>
        <Box
          sx={{
            p: 7,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.paper'
          }}
        >
          <BoxWrapper>
            <Box
              sx={{
                top: 30,
                left: 40,
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
						<img height={160} width={100} src="/onflogo.svg"/>
              {/* <svg width={100} fill='none' height={100} viewBox='0 0 268 150' xmlns='http://www.w3.org/2000/svg'>

<g transform="translate(0.000000,219.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M412 1901 c-35 -62 -37 -109 -8 -164 l26 -47 -29 15 c-19 9 -32 26
-36 45 -11 49 -57 87 -123 100 -31 7 -68 19 -80 27 -24 15 -24 14 -17 -19 11
-49 30 -82 65 -112 34 -28 46 -32 128 -40 38 -4 65 -14 97 -37 25 -18 45 -33
45 -34 0 0 -16 1 -35 3 -54 6 -81 -5 -139 -57 -29 -27 -60 -51 -67 -53 -29
-10 3 -21 75 -26 64 -4 79 -2 110 17 19 12 45 38 56 57 12 18 24 34 27 34 3 0
29 -16 57 -37 58 -41 203 -107 327 -148 46 -15 88 -31 93 -35 12 -11 -36 -156
-84 -255 -21 -45 -56 -100 -77 -124 l-39 -44 -33 51 c-32 50 -81 96 -128 121
-36 19 -27 6 17 -23 22 -15 53 -49 70 -79 34 -59 41 -89 9 -40 -42 66 -131 96
-148 51 -12 -32 3 -54 44 -68 43 -14 82 -60 91 -107 5 -29 2 -47 -17 -82 -24
-46 -46 -59 -144 -88 -19 -5 -31 -16 -33 -30 -4 -25 -32 -39 -43 -22 -4 6 -12
8 -18 5 -6 -4 -11 -1 -11 8 0 20 -31 36 -70 36 -71 0 -133 46 -151 113 -14 54
18 120 71 147 49 25 61 57 31 81 -18 15 -28 16 -49 8 -36 -14 -68 -45 -83 -81
-11 -28 -14 -29 -20 -12 -5 10 -6 -39 -4 -111 6 -219 63 -368 192 -505 152
-162 325 -236 578 -247 111 -4 143 -2 217 16 257 61 435 238 499 494 29 114
36 338 16 472 -9 55 -14 101 -13 102 2 2 47 -10 101 -27 53 -16 124 -34 157
-39 60 -10 136 -42 195 -81 l33 -22 -5 29 c-2 15 -7 49 -10 75 -6 45 -8 48
-43 57 -20 5 -72 14 -114 20 -184 25 -348 79 -348 115 0 31 -90 86 -138 86
-40 0 -110 59 -179 151 -30 41 -64 84 -75 96 l-21 23 44 39 44 39 0 100 0 101
-25 -16 c-89 -56 -117 -120 -91 -211 15 -52 -4 -40 -82 52 -32 37 -36 38 -116
46 -45 5 -89 14 -97 21 -35 29 6 -53 49 -99 38 -39 90 -55 156 -46 42 5 55 3
80 -15 42 -30 39 -40 -8 -34 -58 8 -87 -3 -140 -52 -26 -24 -58 -48 -71 -53
-23 -9 -23 -10 14 -22 22 -7 64 -10 99 -8 58 4 62 7 108 57 l48 52 15 -24 c9
-13 25 -50 36 -82 12 -36 35 -75 57 -97 29 -29 34 -41 25 -50 -9 -9 -24 -7
-64 10 -52 21 -76 27 -293 76 -187 42 -322 96 -451 178 l-61 39 18 37 c28 53
24 90 -16 152 -19 30 -35 60 -35 67 0 27 -18 20 -38 -16z m853 -592 c63 -19
66 -22 61 -47 -2 -15 -8 -54 -11 -87 -16 -147 -100 -381 -169 -470 -22 -28
-21 -10 9 120 30 137 48 325 39 428 -4 42 -4 77 -1 77 3 0 35 -9 72 -21z
m-627 -282 c3 -14 -1 -18 -20 -15 -12 2 -24 11 -26 21 -3 14 1 18 20 15 12 -2
24 -11 26 -21z m-330 -14 c-4 -22 -48 -31 -48 -10 0 19 10 27 32 27 13 0 18
-6 16 -17z"/>
<path d="M422 1189 c-4 -4 -33 -14 -65 -24 -57 -18 -136 -76 -158 -117 -6 -11
12 4 39 32 54 56 59 56 127 24 19 -10 31 -11 33 -4 2 5 8 7 14 4 5 -3 16 2 23
12 14 18 14 18 15 -6 1 -14 4 -19 7 -12 2 6 9 12 15 12 5 0 21 9 35 20 14 11
40 20 57 20 43 0 15 17 -41 26 -24 3 -41 10 -38 14 5 9 -53 8 -63 -1z"/>
<path d="M176 1005 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z"/>
<path d="M425 1010 c-3 -5 1 -17 9 -25 13 -13 19 -13 36 -3 11 7 19 17 17 23
-5 14 -54 18 -62 5z"/>
<path d="M507 953 c-4 -3 -28 -12 -54 -19 -46 -12 -47 -13 -13 -13 20 0 46 8
60 19 14 11 22 20 19 20 -3 0 -9 -3 -12 -7z"/>
</g>
</svg> */}

              {/* <svg width={47} fill='none' height={26} viewBox='0 0 268 150' xmlns='http://www.w3.org/2000/svg'>
                <rect
                  rx='25.1443'
                  width='50.2886'
                  height='143.953'
                  fill={theme.palette.primary.main}
                  transform='matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)'
                />
                <rect
                  rx='25.1443'
                  width='50.2886'
                  height='143.953'
                  fillOpacity='0.4'
                  fill='url(#paint0_linear_7821_79167)'
                  transform='matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)'
                />
                <rect
                  rx='25.1443'
                  width='50.2886'
                  height='143.953'
                  fill={theme.palette.primary.main}
                  transform='matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)'
                />
                <rect
                  rx='25.1443'
                  width='50.2886'
                  height='143.953'
                  fill={theme.palette.primary.main}
                  transform='matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)'
                />
                <rect
                  rx='25.1443'
                  width='50.2886'
                  height='143.953'
                  fillOpacity='0.4'
                  fill='url(#paint1_linear_7821_79167)'
                  transform='matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)'
                />
                <rect
                  rx='25.1443'
                  width='50.2886'
                  height='143.953'
                  fill={theme.palette.primary.main}
                  transform='matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)'
                />
                <defs>
                  <linearGradient
                    y1='0'
                    x1='25.1443'
                    x2='25.1443'
                    y2='143.953'
                    id='paint0_linear_7821_79167'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop />
                    <stop offset='1' stopOpacity='0' />
                  </linearGradient>
                  <linearGradient
                    y1='0'
                    x1='25.1443'
                    x2='25.1443'
                    y2='143.953'
                    id='paint1_linear_7821_79167'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop />
                    <stop offset='1' stopOpacity='0' />
                  </linearGradient>
                </defs>
              </svg> */}
              <Typography variant='h6' sx={{ ml: 2, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important' }}>
                {themeConfig.templateName}
              </Typography>
            </Box>
            <Box sx={{ mb: 6 }}>
              <TypographyStyled variant='h5'>{`Bienvenido ${themeConfig.templateName}! 👋🏻`}</TypographyStyled>
              <Typography variant='body2'>
                

              </Typography>
            </Box>
            {/* <Alert icon={false} sx={{ py: 3, mb: 6, ...bgClasses.primaryLight, '& .MuiAlert-message': { p: 0 } }}>
              <Typography variant='caption' sx={{ mb: 2, display: 'block', color: 'primary.main' }}>
                Admin: <strong>admin@oficinaforestalcr.org</strong> / Pass: <strong>admin</strong>
              </Typography>
              <Typography variant='caption' sx={{ display: 'block', color: 'primary.main' }}>
                Client: <strong>client@oficinaforestalcr.org</strong> / Pass: <strong>client</strong>
              </Typography>
            </Alert> */}
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      autoFocus
                      label='Email'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.email)}
                      placeholder='admin@oficinaforestalcr.org'
                    />
                  )}
                />
                {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
                  Contraseña
                </InputLabel>
                <Controller
                  name='password'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <OutlinedInput
                      value={value}
                      onBlur={onBlur}
                      label='Password'
                      onChange={onChange}
                      id='auth-login-v2-password'
                      error={Boolean(errors.password)}
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOutline /> : <EyeOffOutline />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.password && (
                  <FormHelperText sx={{ color: 'error.main' }} id=''>
                    {errors.password.message}
                  </FormHelperText>
                )}
              </FormControl>
              <Box
                sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
              >
                <FormControlLabel
                  label='Recordarme'
                  control={<Checkbox />}
                  sx={{ '& .MuiFormControlLabel-label': { color: 'text.primary' } }}
                />
                <Link passHref href='/forgot-password'>
                  <Typography component={MuiLink} variant='body2' sx={{ color: 'primary.main' }}>
                    Olvidó la contraseña?
                  </Typography>
                </Link>
              </Box>
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }}>
                Iniciar sesión
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ mr: 2, color: 'text.secondary' }}>No tiene cuenta?</Typography>
                <Typography>
                  <Link passHref href='/register'>
                    <Typography component={MuiLink} sx={{ color: 'primary.main' }}>
                      Crear una cuenta
                    </Typography>
                  </Link>
                </Typography>
              </Box>
              <Divider sx={{ mt: 5, mb: 7.5, '& .MuiDivider-wrapper': { px: 4 } }}>o</Divider>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Link href='https://www.facebook.com/OficinaNacionalForestal' passHref>
                  <IconButton component='a' onClick={e => e.preventDefault()}>
                    <Facebook sx={{ color: '#497ce2' }} />
                  </IconButton>
                </Link>
                <Link href='https://twitter.com/onf_cr' passHref>
                  <IconButton component='a' onClick={e => e.preventDefault()}>
                    <Twitter sx={{ color: '#1da1f2' }} />
                  </IconButton>
                </Link>
                <Link href='https://github.com/jsarroyo' passHref>
                  <IconButton component='a' onClick={e => e.preventDefault()}>
                    <Github
                      sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : theme.palette.grey[300]) }}
                    />
                  </IconButton>
                </Link>
                 
              </Box>
            </form>
          </BoxWrapper>
        </Box>
      </RightWrapper>
    </Box>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage
