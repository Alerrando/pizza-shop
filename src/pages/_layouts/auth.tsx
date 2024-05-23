import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="">
      <h1>Autenticação</h1>

      <div className="">
        <Outlet />
      </div>
    </div>
  )
}
