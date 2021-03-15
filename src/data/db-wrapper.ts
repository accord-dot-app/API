import { Document } from 'mongoose';

export default abstract class DBWrapper<K, T extends Document> {
  get(identifier: K) {
    return this.getOrCreate(identifier);
  }

  protected abstract getOrCreate(type: K): Promise<T | null | undefined>;

  save(savedType: T) {
    return savedType?.save();
  }
}