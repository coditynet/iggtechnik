import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603721726856-cdf9223d9d95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20">
    </div>
      <main>
      <SignUp/>
      </main>
      </div>
  )
}