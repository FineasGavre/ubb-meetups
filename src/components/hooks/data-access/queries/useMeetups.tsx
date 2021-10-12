import axios from 'axios'
import { Meetup } from '../../../../services/models/Meetup'
import { useQuery } from 'react-query'

type MeetupsResponse = Meetup[]

export function useMeetups() {
    const fetchMeetups = async () => {
        return (await axios.get<MeetupsResponse>('/meetup')).data
    }

    return useQuery<MeetupsResponse>('/meetup', fetchMeetups)
}
