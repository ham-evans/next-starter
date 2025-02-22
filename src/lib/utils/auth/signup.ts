'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/utils/supabase/server'

export const signUp = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  const supabase = await createClient()
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_URL}/api/auth/callback`,
    },
  })

  if (error) throw error

  return redirect('/')
}
