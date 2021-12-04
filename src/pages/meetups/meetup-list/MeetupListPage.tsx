import { IonContent, IonHeader, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/react'
import { RefresherEventDetail } from '@ionic/core'
import { MeetupListCard } from './MeetupListCard'
import { useAppSelector } from '../../../components/hooks/state-access/useAppSelector'
import { useEffect } from 'react'
import { useAppDispatch } from '../../../components/hooks/state-access/useAppDispatch'
import { getAllMeetups } from '../../../store/slices/meetups'

export function MeetupListPage() {
    const meetups = useAppSelector((state) => state.meetups.meetups)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllMeetups())
    }, [dispatch])

    const onRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
        await dispatch(getAllMeetups())
        event.detail.complete()
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Meetups</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={onRefresh}>
                    <IonRefresherContent />
                </IonRefresher>
                {meetups?.map((meetup) => (
                    <MeetupListCard meetup={meetup} key={meetup.id} />
                ))}
            </IonContent>
        </IonPage>
    )
}
