import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://woipdmnrefutmcxjzwfe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvaXBkbW5yZWZ1dG1jeGp6d2ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0OTM2NTMsImV4cCI6MjA2NDA2OTY1M30.HaGzPmERL9D7NURhSXE9hEoCAbgik4udiMK0YuGx350';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);