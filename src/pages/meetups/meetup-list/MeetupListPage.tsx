import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader, IonList,
    IonPage, IonRefresher, IonRefresherContent,
    IonTitle,
    IonToolbar
} from '@ionic/react'
import { RefresherEventDetail } from '@ionic/core'
import { MeetupListCard } from './MeetupListCard'
import { useAppSelector } from '../../../components/hooks/state-access/useAppSelector'
import { useEffect } from 'react'
import { useAppDispatch } from '../../../components/hooks/state-access/useAppDispatch'
import { syncMeetups } from '../../../store/slices/meetups'

export function MeetupListPage() {
    const meetups = useAppSelector(state => state.meetups.meetups)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(syncMeetups())
    }, [])

    const onRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
        await dispatch(syncMeetups())
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
