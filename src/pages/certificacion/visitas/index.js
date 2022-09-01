// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'

// ** Styled Component
import DropzoneWrapper from 'src/@core/styles/libs/react-dropzone'

// ** Demo Components Imports
import FileUploaderSingle from 'src/views/forms/form-elements/file-uploader/FileUploaderSingle'
import FileUploaderMultiple from 'src/views/forms/form-elements/file-uploader/FileUploaderMultiple'
import FileUploaderRestrictions from 'src/views/forms/form-elements/file-uploader/FileUploaderRestrictions'

// ** Source code imports
import * as source from 'src/views/forms/form-elements/file-uploader/FileUploaderSourceCode'

const FileUploader = () => {
  return (
    <DropzoneWrapper>
      <Grid container spacing={6} className='match-height'>
        <PageHeader
          title={
            <Typography variant='h5'>
              <Link href='https://github.com/react-dropzone/react-dropzone/' target='_blank'>
                Carga de informes
              </Link>
            </Typography>
          }
          subtitle={<Typography variant='body2'>Cargue los archivos correspondientes a la visita realizada</Typography>}
        />
        <Grid item xs={12}>
          <CardSnippet
            title='Puede cargar varios archivos'
            code={{
              tsx: null,
              jsx: source.FileUploaderMultipleJSXCode
            }}
          >
            <FileUploaderMultiple />
          </CardSnippet>
        </Grid>
          
      </Grid>
    </DropzoneWrapper>
  )
}

export default FileUploader
