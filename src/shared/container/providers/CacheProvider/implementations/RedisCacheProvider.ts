import Redis, { Redis as RedisClient } from 'ioredis';
import ICacheProviders from '@shared/container/providers/CacheProvider/models/ICacheProvider';

export default class RedisCacheProvider implements ICacheProviders {
  private client: RedisClient;

  constructor() {
    this.client = new Redis();
  }

  public async save(key: string, value: any): Promise<void> {
    await this.client.set(key, JSON.stringify(value));
  }

  public async recover<T>(key: string): Promise<T | null> {
    const data = await this.client.get(key);

    if (!data) {
      return null;
    }

    const parseData = JSON.parse(data) as T;

    return parseData;
  }

  public async invalidate(key: string): Promise<void> {
    this.client.del(key);
  }

  public async invalidatePrefix(prefix: string): Promise<void> {
    const keys = await this.client.keys(`${prefix}:*`);

    const pipeline = this.client.pipeline();

    keys.forEach(key => {
      pipeline.del(key);
    });

    await pipeline.exec();
  }
}
