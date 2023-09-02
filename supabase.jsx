import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vxbgckzlospzoavaaghh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4Ymdja3psb3Nwem9hdmFhZ2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2NDA5ODUsImV4cCI6MjAwOTIxNjk4NX0.TzUAWhm8Lf4rAHulsql2NtVpPYfoo4zhmYGJW-s53Ig';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;