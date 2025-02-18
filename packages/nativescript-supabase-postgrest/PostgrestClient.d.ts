import PostgrestQueryBuilder from './lib/PostgrestQueryBuilder';
import PostgrestFilterBuilder from './lib/PostgrestFilterBuilder';
export default class PostgrestClient {
    url: string;
    headers: {
        [key: string]: string;
    };
    schema?: string;
    /**
     * Creates a PostgREST client.
     *
     * @param url  URL of the PostgREST endpoint.
     * @param headers  Custom headers.
     * @param schema  Postgres schema to switch to.
     */
    constructor(url: string, { headers, schema }?: {
        headers?: {
            [key: string]: string;
        };
        schema?: string;
    });
    /**
     * Authenticates the request with JWT.
     *
     * @param token  The JWT token to use.
     */
    auth(token: string): this;
    /**
     * Perform a table operation.
     *
     * @param table  The table name to operate on.
     */
    from<T = any>(table: string): PostgrestQueryBuilder<T>;
    /**
     * Perform a stored procedure call.
     *
     * @param fn  The function name to call.
     * @param params  The parameters to pass to the function call.
     * @param count  Count algorithm to use to count rows in a table.
     */
    rpc<T = any>(fn: string, params?: object, { count, }?: {
        count?: null | 'exact' | 'planned' | 'estimated';
    }): PostgrestFilterBuilder<T>;
}
