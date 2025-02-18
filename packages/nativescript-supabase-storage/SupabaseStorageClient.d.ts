import { StorageBucketApi, StorageFileApi } from './lib';
export declare class SupabaseStorageClient extends StorageBucketApi {
    constructor(url: string, headers?: {
        [key: string]: string;
    });
    /**
     * Perform file operation in a bucket.
     *
     * @param id The bucket id to operate on.
     */
    from(id: string): StorageFileApi;
}
