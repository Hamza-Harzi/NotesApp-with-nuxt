import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6YXpxaGlyd3ZobW1xZGNobWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3Mzg3MzYsImV4cCI6MTk5NzMxNDczNn0.zblfiQS6-LfJxCZrHp2Vfaaw04Ak0tilFrv1r4R5_Fo"
const SUPABASE_URL = "https://kzazqhirwvhmmqdchmeh.supabase.co"
const useSupabase = () => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    return {
        supabase
    }
}

export default useSupabase




