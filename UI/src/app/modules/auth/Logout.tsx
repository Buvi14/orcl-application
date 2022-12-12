import {useEffect} from 'react'
import {Navigate, Routes, Route} from 'react-router-dom'
import { Login } from './components/Login'
import {useAuth} from './core/Auth'

export function Logout() {
  const {logout} = useAuth()
  useEffect(() => {
    logout()
    document.location.reload()
  }, [logout])

  return (
    <>
    <Routes>
      <Route path='*' element={<Navigate to='/auth/login' />} />
    </Routes>
    </>
  )
}
