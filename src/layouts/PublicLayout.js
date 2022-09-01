import { styled } from '@mui/material/styles'
import { useSettings } from 'src/@core/hooks/useSettings'
import BlankLayoutAppBar from 'src/@core/layouts/components/blank-layout-with-appBar'
import BarraPrincipal from './components/BarraPrincipal'



const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const PublicLayout = ({ children }) => {
	const {settings} = useSettings()
	const {contentWidth} = settings
  return (
    <>
      <BarraPrincipal />
			{/* <BlankLayoutAppBar /> */}
      <ContentWrapper
				className='layout-page-content'
				sx={{
					...(contentWidth === 'boxed' && {
						mx: 'auto',
            '@media (min-width:1440px)': { maxWidth: 1440 },
            '@media (min-width:1200px)': { maxWidth: '100%' }
					})
				}}
			>{children}
			</ContentWrapper>
      {/* <h1>Footer</h1> */}
    </>
  )
}

export default PublicLayout