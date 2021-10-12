import axios from 'axios'
import { useQuery } from 'react-query'
import { Meetup } from '../../../../services/models/Meetup'

type MeetupResponse = Meetup

export function useMeetup(meetupId: string) {
    const fetchMeetup = async () => {
        return (await axios.get<MeetupResponse>(`/meetup/${meetupId}`)).data
    }

    return useQuery<MeetupResponse>(`/meetup/${meetupId}`, fetchMeetup)
}
