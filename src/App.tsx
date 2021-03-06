import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Tab2 from './pages/Tab2'
import Tab3 from './pages/Tab3'
import { ServerSideNotificationToastProvider } from './components/providers/ServerSideNotificationToastProvider'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import { MeetupDetailPage } from './pages/meetups/meetup-detail/MeetupDetailPage'
import { Meetup } from './services/models/Meetup'
import { TabBar } from './components/navigation/TabBar'
import { ellipse, square, triangle } from 'ionicons/icons'
import { MeetupListPage } from './pages/meetups/meetup-list/MeetupListPage'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AxiosProvider } from './components/providers/AxiosProvider'

const testMeetup: Meetup = {
    id: 'HELLO',
    name: 'Small gathering',
    startDate: new Date(),
    endDate: new Date(),
    location: {
        friendlyName: 'Roots',
        address: 'Cluj-Napoca',
        geoCoordinates: {
            longitude: 0,
            latitude: 0,
        },
    },
    organizer: {
        id: 'test',
        firstName: 'Fineas',
        lastName: 'Gavre',
    },
    attendances: [],
}

const queryClient = new QueryClient()

const App: React.FC = () => (
    <AxiosProvider>
        <QueryClientProvider client={queryClient}>
            <IonApp>
                <IonReactRouter>
                    <IonTabs>
                        <IonRouterOutlet>
                            <Route path="/meetups">
                                <Route exact path="/meetups" component={MeetupListPage} />
                                <Route exact path="/meetups/:meetupId" component={MeetupDetailPage} />
                            </Route>
                            <Route exact path="/tab2">
                                <Tab2 />
                            </Route>
                            <Route path="/tab3">
                                <Tab3 />
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
            </IonApp>
        </QueryClientProvider>
    </AxiosProvider>
)

export default App
