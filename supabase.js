import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "";

const supabaseAnonKey =
  "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
