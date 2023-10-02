import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iydomtajghosqibuyspi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5ZG9tdGFqZ2hvc3FpYnV5c3BpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNTQ5MDYsImV4cCI6MjAxMTczMDkwNn0.MTr1J5ABd5XBONt-WrahzP6t2LtfqjEBmn2ZoL0aaKM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
