'use server'

import { createClient } from '@/lib/utils/supabase/server'

export const getUser = async () => {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}
