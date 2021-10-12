import { Meetup } from '../../../services/models/Meetup'
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react'

interface MeetupListCardProps {
    meetup: Meetup
}

export function MeetupListCard({ meetup }: MeetupListCardProps) {
    return (
        <IonCard button href={`/meetups/${meetup.id}`}>
            <IonCardHeader>
                <IonCardTitle>{meetup.name}</IonCardTitle>
            </IonCardHeader>
        </IonCard>
    )
}
