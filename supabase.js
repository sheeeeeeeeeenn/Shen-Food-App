import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://zxictdejzaimgsigyrif.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4aWN0ZGVqemFpbWdzaWd5cmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyMjg0NTUsImV4cCI6MjAxNzgwNDQ1NX0.IhxPYcQ87YaZH9Kp7zRNFMrEIArEkujICGi-acybOXM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
