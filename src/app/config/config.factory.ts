import { ConfigService } from '../config.service';

export const configFactory = (config: ConfigService) => () => config.load();
