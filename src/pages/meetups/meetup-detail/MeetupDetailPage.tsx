import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonChip,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonText,
    IonTitle,
    IonToolbar,
} from '@ionic/react'
import { RouteComponentProps } from 'react-router'
import { useMeetup } from '../../../components/hooks/data-access/queries/useMeetup'

interface MeetupDetailPageRouteParams {
    meetupId: string
}

interface MeetupDetailPageProps extends RouteComponentProps<MeetupDetailPageRouteParams> {}

export function MeetupDetailPage(props: MeetupDetailPageProps) {
    const { data: meetup } = useMeetup(props.match.params.meetupId)

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{meetup?.name}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>MEETUP</IonCardSubtitle>
                        <IonCardTitle>{meetup?.name}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>
                            Organised by: {`${meetup?.organizer.firstName} ${meetup?.organizer.lastName}`}
                        </IonText>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Attendees</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList inset={false} lines="none">
                            <IonItem>
                                <IonLabel>Fineas Gavre</IonLabel>
                                <IonChip color="success">
                                    <IonLabel>Confirmed</IonLabel>
                                </IonChip>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Carina Ghiorghita</IonLabel>
                                <IonChip color="success">
                                    <IonLabel>Confirmed</IonLabel>
                                </IonChip>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Cristian Gherman</IonLabel>
                                <IonChip color="success">
                                    <IonLabel>Confirmed</IonLabel>
                                </IonChip>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Andrei Foidas</IonLabel>
                                <IonChip color="success">
                                    <IonLabel>Confirmed</IonLabel>
                                </IonChip>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Andrei Doreata</IonLabel>
                                <IonChip color="danger">
                                    <IonLabel>Declined</IonLabel>
                                </IonChip>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}
