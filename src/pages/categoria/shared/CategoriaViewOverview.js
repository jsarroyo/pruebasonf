// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TimelineItem from '@mui/lab/TimelineItem'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'
import TimelineContent from '@mui/lab/TimelineContent'
import TableContainer from '@mui/material/TableContainer'
import LinearProgress from '@mui/material/LinearProgress'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'

// ** Demo Component Imports
import CategoriaInvoiceListTable from './CategoriaInvoiceListTable'

const projectListDate = [
  {
    rigeHasta: '2024-05-07',
    rigeDesde: '2020-05-07',
    ubicacionDelProyecto: 'Heredia',
    progressColor: 'success',
    projectType: 'React Project',
    projectTitle: 'BGC eCommerce App',
    img: '/images/icons/project-icons/react.png'
  },
  {
    rigeHasta: '2020-05-07',
    rigeDesde: '2020-05-07',
    ubicacionDelProyecto: 'Alajuela',
    progressColor: 'error',
    projectType: 'Figma Project',
    projectTitle: 'Falcon Logo Design',
    img: '/images/icons/project-icons/figma.png'
  },
  {
    rigeHasta:'2020-05-07',
    rigeDesde:'2020-05-07',
    ubicacionDelProyecto: 'Cartago',
    progressColor: 'primary',
    projectType: 'VueJs Project',
    projectTitle: 'Dashboard Design',
    img: '/images/icons/project-icons/vue.png'
  },
  {
    rigeHasta: '2020-05-07',
    rigeDesde: '2020-05-07',
    ubicacionDelProyecto: 'Limon',
    progressColor: 'error',
    projectType: 'Xamarin Project',
    projectTitle: 'Foodista Mobile App',
    img: '/images/icons/project-icons/xamarin.png'
  },
  {
    rigeHasta: '2020-05-07',
    rigeDesde: '2020-05-07',
    ubicacionDelProyecto: 'Guanacaste',
    progressColor: 'warning',
    projectType: 'Python Project',
    projectTitle: 'Dojo React Project',
    img: '/images/icons/project-icons/python.png'
  },
  {
    rigeHasta: '2020-05-07',
    rigeDesde: '2020-05-07',
    ubicacionDelProyecto: 'Puntarenas',
    progressColor: 'success',
    projectType: 'Sketch Project',
    projectTitle: 'Blockchain Website',
    img: '/images/icons/project-icons/sketch.png'
  },
  {
    rigeHasta: '2020-05-07',
    rigeDesde: '2020-05-07',
    ubicacionDelProyecto: 'San Jose',
    progressColor: 'success',
    projectType: 'HTML Project',
    projectTitle: 'Hoffman Website',
    img: '/images/icons/project-icons/html5.png'
  }
]

// Styled Timeline component
const Timeline = styled(MuiTimeline)(({ theme }) => ({
  margin: 0,
  padding: 0,
  marginLeft: theme.spacing(0.75),
  '& .MuiTimelineItem-root': {
    '&:before': {
      display: 'none'
    },
    '&:last-child': {
      minHeight: 60
    }
  }
}))

// Styled component for images
const Img = styled('img')(({ theme }) => ({
  width: 34,
  height: 34,
  borderRadius: '50%',
  marginRight: theme.spacing(3)
}))

const CategoriaViewOverview = ({ invoiceData }) => {
  return (
    <Fragment>
      <Card sx={{ mb: 6 }}>
        <CardHeader title='Lista de Proyectos Certificados' titleTypographyProps={{ variant: 'h6' }} />

        <Divider sx={{ m: 0 }} />

        <TableContainer>
          <Table size='small' sx={{ minWidth: 500 }}>
            <TableHead sx={{ backgroundColor: 'customColors.tableHeaderBg' }}>
              <TableRow>
                <TableCell sx={{ height: '3.375rem' }}>Tipo de Proyecto</TableCell>
                <TableCell sx={{ height: '3.375rem' }}>Ubicación</TableCell>
                <TableCell sx={{ height: '3.375rem' }}>Rige desde</TableCell>
                <TableCell sx={{ height: '3.375rem' }}>Rige hasta</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {projectListDate.map((item, index) => (
                <TableRow hover key={index} sx={{ '&:last-of-type td': { border: 0 } }}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Img src={item.img} alt={`project-${index + 1}`} />
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
                          {item.projectTitle}
                        </Typography>
                        <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                          {item.projectType}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{item.ubicacionDelProyecto}</TableCell>
                  <TableCell>
                    <Typography variant='body2' sx={{ color: 'text.primary' }}>
                      {item.rigeDesde}
                    </Typography>
                     
                  </TableCell>
                  <TableCell sx={{ color: 'text.secondary' }}>{item.rigeHasta}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
  
    </Fragment>
  )
}

export default CategoriaViewOverview
