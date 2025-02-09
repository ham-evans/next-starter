'use server'

import { redirect } from 'next/navigation'
import { createClient } from '../supabase/server'

export const login = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw error

  return redirect('/')
}
