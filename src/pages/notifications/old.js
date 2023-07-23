import { Notifiaction } from '@/components/Cards/AuctionCard/UsegeCard/Notification'
import { setNotification } from '@/redux/slices/notifications'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  useGetNotificationsQuery,
  useChangeNotificationStatusMutation,
} from '../../redux/apis/notificationApi.js'

const SelectedNotification = ({ img, description, date }) => {
  return (
    <Grid
      container
      justifyContent={'space-around'}
      flexDirection={'column'}
      position={'relative'}
      height={'100vh'}
    >
      <Grid item height={'70%'} position={'relative'}>
        <Image
          fill
          alt="notification-img"
          src={img}
          style={{ objectFit: 'cover' }}
        />
      </Grid>
      <Grid item>
        <Typography fontWeight={500} textAlign={'center'}>
          {date}
        </Typography>
      </Grid>
      <Grid item display={'flex'} justifyContent={'space-between'}>
        <Typography sx={{ textJustify: 'inner-word', textAlign: 'justify' }}>
          {description}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default function Notifications({}) {
  const [noteficationDatas, setNoteficationDatass] = useState()
  const dispatch = useDispatch()
  const { notificationsData, notification } = useSelector(
    (state) => state.notifications,
  )
  const [selectedNotification, setSelectedNotification] = useState(false)
  const notificationQuery = useGetNotificationsQuery()
  const [updateNotificationQuery] = useChangeNotificationStatusMutation()

  const changeNotStatus = () => {
    notificationQuery?.data?.data?.map((note) => {
      updateNotificationQuery(note.id)
    })
  }
  useEffect(() => {
    console.log(notificationQuery?.data?.data);
    setNoteficationDatass(notificationQuery?.data?.data)
    changeNotStatus()
  }, [notificationQuery])

  useEffect(() => {
    const selected = notificationsData.find(
      (notificationData) => notificationData.id === notification,
    )
    setSelectedNotification(selected)
  }, [notification])

  useEffect(() => {
    return () => {
      dispatch(setNotification(null))
    }
  }, [])
  const renderNotification = noteficationDatas?.map((note) => (
    <Notifiaction
      onClick={() => dispatch(setNotification(note.id))}
      date={note?.createdAt}
      description={note?.title}
      img={note?.imageUrl}
      key={note?.id}
    />
  ))

  return (
    <div
      style={{
        padding: '24px',
        height: 'auto',
        width: '100%',
        position: 'relative',
      }}
    >
      {selectedNotification && (
        <>
          <Box
            display={'flex'}
            onClick={() => dispatch(setNotification(null))}
            alignItems={'center'}
            py={2}
            sx={{ cursor: 'pointer' }}
          >
            <ChevronLeft />
            Notifications
          </Box>
          <SelectedNotification {...selectedNotification} />
        </>
      )}
      {!selectedNotification && (
        <Grid container spacing={2}>
          {renderNotification}
        </Grid>
      )}
    </div>
  )
}
