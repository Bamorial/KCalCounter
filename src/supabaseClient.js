import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://qilbybiaerzpgfwuctbm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpbGJ5YmlhZXJ6cGdmd3VjdGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMzU2MDMsImV4cCI6MjAyNjYxMTYwM30.ZEpk9DnKSr1lwF7gKqEbTlUOh6VNRZMbmaLed2k5iXM"
);
