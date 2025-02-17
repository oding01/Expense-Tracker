import { Database } from './database.types';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_API_KEY

if (!supabaseUrl || !supabaseKey) {
	throw new Error('Missing Supabase environment variables')
}

const supabase = createClient<Database>(supabaseUrl, supabaseKey)

export default supabase
