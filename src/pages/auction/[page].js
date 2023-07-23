import { useRouter } from 'next/router'
import ActiveAuction from './ActiveAuction'
import ActiveAuction2 from './ActiveAuction2'
import UpcompingAcution from './UpcomingAuction'
const Page = () => {
  const router = useRouter()
  const { page } = router.query

  return (
    <div>
      {page === 'auction1' && <ActiveAuction />}
      {page === 'auction2' && <ActiveAuction2 />}
      {page == 'upcoming-auction' && <UpcompingAcution />}
    </div>
  )
}

export default Page
