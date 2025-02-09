import Link from 'next/link'
import { getUser } from '@/lib/utils/auth/utils'
import { signOut } from '@/lib/utils/auth/signout'

export default async function AuthButton() {
  const user = await getUser()

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form>
        <button
          formAction={signOut}
          className="bg-btn-background hover:bg-btn-background-hover rounded-md px-4 py-2 no-underline"
        >
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="bg-btn-background hover:bg-btn-background-hover flex rounded-md px-3 py-2 no-underline"
    >
      Login
    </Link>
  )
}
