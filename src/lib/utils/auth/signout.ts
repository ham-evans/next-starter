'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/utils/supabase/server'

export const signOut = async () => {
  const supabase = await createClient()

  await supabase.auth.signOut()
  return redirect('/login')
}
