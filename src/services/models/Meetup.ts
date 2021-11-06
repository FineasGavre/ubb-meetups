import { User } from './User'

export interface Meetup {
    id: string
    name: string
    startDate: Date
    endDate: Date
    location: MeetupLocation
    organizer: User
    attendances: MeetupUserAttendance[]
}

interface MeetupLocation {
    friendlyName: string
    address: string
    geoCoordinates: {
        latitude: number
        longitude: number
    }
}

export interface MeetupUserAttendance {
    attendee: User
    state: AttendanceState
}

export enum AttendanceState {
    DECLINED,
    TENTATIVE,
    ACCEPTED,
    CHECKED_IN,
}
