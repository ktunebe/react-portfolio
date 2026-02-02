import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div
      className="min-h-screen bg-bg-0 text-text-primary font-dubiel font-bold"
      style={{
        backgroundImage: "url(/logos-images/galaxy-bg-landscape.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Optional: dark overlay so text/cards are readable on bright nebula areas */}
      <div className="min-h-screen bg-bg-0/60">
        <div className="flex min-h-screen flex-col w-full max-w-[1600px] mx-auto">
          <Header />

          <main className="flex-grow">
            {/* If you want consistent horizontal padding + max width */}
            <div className="py-10">
              <Outlet />
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  )
}

