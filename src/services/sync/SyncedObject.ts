export interface SyncedObject<T> {
    meta: {
        uploaded: boolean
        hash: string
        lastUploaded?: Date
    }
    object: T
}
