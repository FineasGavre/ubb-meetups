import { useIonToast } from '@ionic/react'
import { useEffect } from 'react'

interface NotificationInterface {
    type: 'notification'
    payload: {
        text: string
    }
}

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

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:3031')

        ws.onopen = () => {
            console.log('web socket has opened')
        }

        ws.onclose = () => {
            console.log('web socket has closed')
        }

        ws.onerror = error => {
            console.log('web socket error', error)
        }

        ws.onmessage = event => {
            console.log('web socket message', event)

            const message = JSON.parse(event.data) as NotificationInterface
            present({
                message: message.payload.text,
                duration: 2000,
                buttons: [{
                    text: 'HIDE',
                    handler: () => dismiss()
                }]
            })
        }
    }, [])

    return <></>
}
