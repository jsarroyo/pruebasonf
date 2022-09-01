// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import PortafolioViewPage from './PortafolioViewPage'

const PortafolioUserView = ({ invoiceData }) => {
  return <PortafolioViewPage id='1' invoiceData={invoiceData} />
}

export const getStaticProps = async () => {
  const res = await axios.get('/apps/invoice/invoices')
  const invoiceData = res.data.allData

  return {
    props: {
      invoiceData
    }
  }
}

export default PortafolioUserView
