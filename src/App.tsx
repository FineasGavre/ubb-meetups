import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { ellipse, square, triangle } from 'ionicons/icons'
import Tab1 from './pages/Tab1'
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

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/tab1">
                        <MeetupDetailPage meetup={testMeetup} />
                    </Route>
                    <Route exact path="/tab2">
                        <Tab2 />
                    </Route>
                    <Route path="/tab3">
                        <Tab3 />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/tab1" />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="tab1" href="/tab1">
                        <IonIcon icon={triangle} />
                        <IonLabel>Tab 1</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab2" href="/tab2">
                        <IonIcon icon={ellipse} />
                        <IonLabel>Tab 2</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/tab3">
                        <IonIcon icon={square} />
                        <IonLabel>Tab 3</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
        <ServerSideNotificationToastProvider />
    </IonApp>
)

export default App
