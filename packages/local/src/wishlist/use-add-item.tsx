import { useCallback } from 'react'

export function emptyHook() {
  const useEmptyHook = async (options = {}) => {
    return useCallback(async function () {
      // TODO
      return Promise.resolve()
    }, [])
  }

  return useEmptyHook
}

export default emptyHook
