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
    IonToolbar
} from '@ionic/react'
import { RouteComponentProps } from 'react-router'
import { useMeetup } from '../../../components/hooks/data-access/queries/useMeetup'
import { AttendanceState, MeetupUserAttendance } from '../../../services/models/Meetup'

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
                            {
                                meetup?.attendances.map(attendance => (
                                    <AttendanceRow userAttendance={attendance} />
                                ))
                            }
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

interface AttendanceRowProps {
    userAttendance: MeetupUserAttendance
}

function AttendanceRow({ userAttendance }: AttendanceRowProps) {
    const stateMap = {
        [AttendanceState.DECLINED]: {
            title: 'Declined',
            color: 'danger'
        },
        [AttendanceState.TENTATIVE]: {
            title: 'Tentative',
            color: 'warning'
        },
        [AttendanceState.ACCEPTED]: {
            title: 'Accepted',
            color: 'success'
        },
        [AttendanceState.CHECKED_IN]: {
            title: 'Checked In',
            color: 'success'
        }
    }

    return (
        <IonItem>
            <IonLabel>{ userAttendance.attendee.firstName + ' ' + userAttendance.attendee.lastName }</IonLabel>
            <IonChip color={stateMap[userAttendance.state].color}>
                <IonLabel>{ stateMap[userAttendance.state].title }</IonLabel>
            </IonChip>
        </IonItem>
    )
}
