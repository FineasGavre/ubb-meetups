import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react'
import { useMeetups } from '../../../components/hooks/data-access/queries/useMeetups'
import { MeetupListCard } from './MeetupListCard'

export function MeetupListPage() {
    const { data: meetups } = useMeetups()

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Meetups</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {meetups?.map((meetup) => (
                    <MeetupListCard meetup={meetup} key={meetup.id} />
                ))}
            </IonContent>
        </IonPage>
    )
}
