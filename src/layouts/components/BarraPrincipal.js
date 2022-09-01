// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

import MenuHamburger from 'mdi-material-ui/Menu'

// ** Configs
import themeConfig from 'src/configs/themeConfig'
import { MenuItem, Box, Menu, Container, IconButton, Button, Tooltip, Avatar } from '@mui/material'
import { useState } from 'react'

const StyledLink = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8)
}))

const paginas = [
		{
			texto: 'Portafolio',
			ruta: '/portafolio/buscar'
		},
		{
			texto: 'Sobre nosotros',
			ruta: '/sobrenosotros'
		},
		{
			texto: 'Noticias',
			ruta: '/noticias'
		},
		{
			texto: 'Contáctenos',
			ruta: '/contactenos'
		},
		{
			texto: 'Esquema de certificación',
			ruta: '/certificacion/solicitud'
		}
	]


const pages = ['Protafolio', 'Sobre nosotros', 'Esquema de certificación'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const BarraPrincipal = () => {
  // ** Hooks
  // const theme = useTheme()

  // return (
    // <AppBar elevation={3} color='default' position='sticky'>
    //   <Toolbar
    //     sx={{
    //       justifyContent: 'space-between',
    //       p: theme => `${theme.spacing(0, 6)} !important`,
    //       minHeight: `${theme.mixins.toolbar.minHeight}px !important`
    //     }}
    //   >
    //     <Link href='/' passHref>
    //       <StyledLink>
		// 			<img width={70} height={52} src='/onflogo.svg'/>
    //         {/* <svg width={40} fill='none' height={22} viewBox='0 0 268 150' xmlns='http://www.w3.org/2000/svg'>
    //           <rect
    //             rx='25.1443'
    //             width='50.2886'
    //             height='143.953'
    //             fill={theme.palette.primary.main}
    //             transform='matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)'
    //           />
    //           <rect
    //             rx='25.1443'
    //             width='50.2886'
    //             height='143.953'
    //             fillOpacity='0.4'
    //             fill='url(#paint0_linear_7821_79167)'
    //             transform='matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)'
    //           />
    //           <rect
    //             rx='25.1443'
    //             width='50.2886'
    //             height='143.953'
    //             fill={theme.palette.primary.main}
    //             transform='matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)'
    //           />
    //           <rect
    //             rx='25.1443'
    //             width='50.2886'
    //             height='143.953'
    //             fill={theme.palette.primary.main}
    //             transform='matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)'
    //           />
    //           <rect
    //             rx='25.1443'
    //             width='50.2886'
    //             height='143.953'
    //             fillOpacity='0.4'
    //             fill='url(#paint1_linear_7821_79167)'
    //             transform='matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)'
    //           />
    //           <rect
    //             rx='25.1443'
    //             width='50.2886'
    //             height='143.953'
    //             fill={theme.palette.primary.main}
    //             transform='matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)'
    //           />
    //           <defs>
    //             <linearGradient
    //               y1='0'
    //               x1='25.1443'
    //               x2='25.1443'
    //               y2='143.953'
    //               id='paint0_linear_7821_79167'
    //               gradientUnits='userSpaceOnUse'
    //             >
    //               <stop />
    //               <stop offset='1' stopOpacity='0' />
    //             </linearGradient>
    //             <linearGradient
    //               y1='0'
    //               x1='25.1443'
    //               x2='25.1443'
    //               y2='143.953'
    //               id='paint1_linear_7821_79167'
    //               gradientUnits='userSpaceOnUse'
    //             >
    //               <stop />
    //               <stop offset='1' stopOpacity='0' />
    //             </linearGradient>
    //           </defs>
    //         </svg> */}
    //         <Typography variant='h6' sx={{ ml: 2, fontWeight: 700, lineHeight: 1.2 }}>
    //           {themeConfig.templateName}
    //         </Typography>
    //       </StyledLink>
    //     </Link>
    //   </Toolbar>
    // </AppBar>
  // )



	const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
						MADERA LEGAL CR
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
							<MenuHamburger/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
							{paginas.map((page) => (
								<Link href={page.ruta} >
									<MenuItem key={page.texto} onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{page.texto}</Typography>
									</MenuItem>
								</Link>
								
							))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MADERA LEGAL CR
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
						{paginas.map((page) => (
							<Link href={page.ruta}>
								<Button
									key={page.texto}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'white', display: 'block' }}
								>
									{page.texto}
								</Button>
							</Link>
							
						))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/onflogo.svg" />
              </IconButton>
            </Tooltip> */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default BarraPrincipal
