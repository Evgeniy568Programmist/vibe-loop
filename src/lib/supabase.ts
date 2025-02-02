import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ajoveudhrdkmwzifjxam.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqb3ZldWRocmRrbXd6aWZqeGFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3OTUyMjQsImV4cCI6MjA1MzM3MTIyNH0.d6OnYdxOexoByiTIx9jsjYre1RPOIzr2Vx3xaCRFdS8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);