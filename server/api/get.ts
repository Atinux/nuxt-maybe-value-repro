import { prefixStorage } from 'unstorage'
import { storage } from '#storage'

export const contentStorage = prefixStorage(storage, 'content:source:content')

export default async () => {
  const keys = await contentStorage.getKeys()
  const contents = await Promise.all(
    keys.map(async (id) => {
      const body = await contentStorage.getItem(id)
      const meta = await contentStorage.getMeta(id)

      return { id, meta, body }
    })
  )

  return contents
}
