import { useAppSelector } from '../hooks/state-access/useAppSelector'
import { IonReactRouter } from '@ionic/react-router'
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { Redirect, Route } from 'react-router-dom'
import { MeetupListPage } from '../../pages/meetups/meetup-list/MeetupListPage'
import { MeetupDetailPage } from '../../pages/meetups/meetup-detail/MeetupDetailPage'
import { ellipse, square, triangle } from 'ionicons/icons'
import { ServerSideNotificationToastProvider } from '../providers/ServerSideNotificationToastProvider'
import { LoginPage } from '../../pages/authentication/login/LoginPage'

export function AppRouter() {
    const isAuthenticated = useAppSelector((state) => state.authentication.isAuthenticated)

    if (isAuthenticated) {
        return (
            <>
                <IonReactRouter>
                    <IonTabs>
                        <IonRouterOutlet>
                            <Route path="/meetups">
                                <Route exact path="/meetups" component={MeetupListPage} />
                                <Route exact path="/meetups/:meetupId" component={MeetupDetailPage} />
                            </Route>
                            <Route exact path="/">
                                <Redirect to="/meetups" />
                            </Route>
                        </IonRouterOutlet>
                        <IonTabBar slot="bottom">
                            <IonTabButton tab="meetups" href="/meetups">
                                <IonIcon icon={triangle} />
                                <IonLabel>Meetups</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="tab2" href="/tab2">
                                <IonIcon icon={ellipse} />
                                <IonLabel>My Meetups</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="tab3" href="/tab3">
                                <IonIcon icon={square} />
                                <IonLabel>My Account</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                    </IonTabs>
                </IonReactRouter>
                <ServerSideNotificationToastProvider />
            </>
        )
    } else {
        return (
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/" component={LoginPage} />
                </IonRouterOutlet>
            </IonReactRouter>
        )
    }
}
