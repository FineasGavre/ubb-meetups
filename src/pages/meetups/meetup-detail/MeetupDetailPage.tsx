import {
    IonBackButton,
    IonButtons,
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
import { useAppSelector } from '../../../components/hooks/state-access/useAppSelector'

interface MeetupDetailPageRouteParams {
    meetupId: string
}

interface MeetupDetailPageProps extends RouteComponentProps<MeetupDetailPageRouteParams> {}

export function MeetupDetailPage(props: MeetupDetailPageProps) {
    const meetup = useAppSelector((state) =>
        state.meetups.meetups.find((meetupState) => meetupState.id === props.match.params.meetupId)
    )

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
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
                        <IonText>Organised by: {`${meetup?.user_id}`}</IonText>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}
