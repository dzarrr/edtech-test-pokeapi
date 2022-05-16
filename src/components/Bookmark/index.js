import { useEffect } from 'react'

export const Bookmark = () => {

  useEffect(() => {
    window.addEventListener('online', () => {
      console.log('anda terdeteksi online!!')
    })
  }, [])

  return (
    <>
    <h1>
      Bookmarked Pokémon List
    </h1>
    <div>
      test
    </div>
    </>
  )
}