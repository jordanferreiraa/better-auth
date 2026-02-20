import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ButtonSignOut } from "./_components/button-signout";

export default async function Dashboard() {

  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
  })

  if(!session) {
    redirect("/") 
  }

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold mb-2">Página dashboard</h1>
      <h3>Usuario logado: {session.user.name}</h3>
      <h3 className="mb-4">Email: {session.user.email}</h3>
      <ButtonSignOut />
    </div>
  );
}