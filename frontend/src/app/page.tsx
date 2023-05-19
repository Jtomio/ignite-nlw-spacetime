import { EmptyMemories } from '@/components/EmptyMemories'

export default function Home() {
  return (
    <>
      {/* Right section */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </>
  )
}
