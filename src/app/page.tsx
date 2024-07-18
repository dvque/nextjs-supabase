import { supabase, supabaseAdmin } from "@/lib/supabase";

export default function Home() {
  const setNewView = async () => {
    const { data, error } = await supabaseAdmin
      .from("views")
      .insert({
        name: 'random name'
      })

    if (data) console.log('data', data)
    if (error) console.log('error', error)
  }

  setNewView();

  return <div>hello</div>
}
