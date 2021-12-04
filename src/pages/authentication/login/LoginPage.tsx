import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonItemDivider,
    IonList,
    IonPage,
    IonTitle,
} from '@ionic/react'
import { useState } from 'react'
import { useAppDispatch } from '../../../components/hooks/state-access/useAppDispatch'
import { authenticate } from '../../../store/slices/authentication'

export function LoginPage() {
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLoginButtonPressed = async () => {
        await dispatch(
            authenticate({
                email,
                password,
            })
        )
    }

    return (
        <IonPage>
            <IonHeader>
                <IonTitle>Login to UBB Meetups</IonTitle>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Please enter your credentials</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonItemDivider>Email</IonItemDivider>
                            <IonItem>
                                <IonInput
                                    type="email"
                                    placeholder="Enter email:"
                                    onIonChange={(e) => setEmail(e.detail.value!)}
                                />
                            </IonItem>
                            <IonItemDivider>Password</IonItemDivider>
                            <IonItem>
                                <IonInput
                                    type="password"
                                    placeholder="Enter password:"
                                    onIonChange={(e) => setPassword(e.detail.value!)}
                                />
                            </IonItem>
                            <IonButton expand="full" onClick={onLoginButtonPressed}>
                                Login
                            </IonButton>
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}
