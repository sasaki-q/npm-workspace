import { Injectable } from '@nestjs/common';
import { 
    Connection,
    createConnection,
    ConnectionOptions, 
    getConnectionManager, 
} from 'typeorm';
import { dbConnectionOptions } from '@/config';

@Injectable()
export class DatabaseService {
    private readonly CONNECTION_NAME = 'default';
    private connection: Connection
    private connectionOptions: ConnectionOptions

    async manageConnection(): Promise<void> {
        if(!this.connectionOptions) {
            this.connectionOptions = dbConnectionOptions;
            this.connection = await createConnection(this.connectionOptions);
            return
        }

        if(!this.connection || getConnectionManager().has(this.CONNECTION_NAME) === false) {
            this.connection = await createConnection(this.connectionOptions);
            return;
        }

        if(this.connection.isConnected === false) {
            this.connection = await this.connection.connect();
            return
        }
    }
}
