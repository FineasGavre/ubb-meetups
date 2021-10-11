import { useIonToast } from '@ionic/react'
import { useEffect } from 'react'

export function ServerSideNotificationToastProvider() {
    const [present, dismiss] = useIonToast()

    // useEffect(() => {
    //     const cancellable = setInterval(() => {
    //         present({
    //             buttons: [
    //                 {
    //                     text: 'hide',
    //                     handler() {
    //                         dismiss()
    //                     }
    //                 }
    //             ],
    //             message: 'this is a nice toast'
    //         })
    //     }, 3000)
    //
    //     return () => {
    //         clearInterval(cancellable)
    //     }
    // }, [present, dismiss])

    return <></>
}
