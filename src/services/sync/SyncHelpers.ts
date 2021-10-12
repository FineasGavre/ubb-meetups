import hash from 'object-hash'
import { SyncedObject } from './SyncedObject'

export function hashObject(object: any): string {
    return hash.sha1(object)
}

export function compareSyncedObjectToHash(object: SyncedObject<any>, hash: string) {
    return object.meta.hash === hash
}
