import { Meetup } from '../../../services/models/Meetup'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'

interface MeetupDetailPageProps {
    meetup: Meetup
}

export function MeetupDetailPage({ meetup }: MeetupDetailPageProps) {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Meetup</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <h1>{meetup.organizer.lastName}</h1>
            </IonContent>
        </IonPage>
    )
}
