import { View } from './view';

import { LogService } from '../../abstractions/log.service';

import { SendFile } from '../domain/sendFile';

export class SendFileView implements View {
    id: string = null;
    url: string = null;
    size: string = null;
    sizeName: string = null;
    fileName: string = null;

    constructor(f?: SendFile) {
        if (!f) {
            return;
        }

        this.id = f.id;
        this.url = f.url;
        this.size = f.size;
        this.sizeName = f.sizeName;
    }

    get fileSize(): number {
        try {
            if (this.size != null) {
                return parseInt(this.size, null);
            }
        } catch (e) {
            LogService.error(e);
        }
        return 0;
    }
}
