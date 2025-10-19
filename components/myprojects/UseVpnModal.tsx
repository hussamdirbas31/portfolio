'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface VpnModalProps {
  isOpen: boolean
  onClose: () => void
  redirectUrl: string
}

const VpnModal = ({ isOpen, onClose, redirectUrl }: VpnModalProps) => {
  const [countdown, setCountdown] = useState(5)
  const router = useRouter()

  useEffect(() => {
    let timer: NodeJS.Timeout
    
    if (isOpen && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000)
    } else if (isOpen && countdown === 0) {
      router.push(redirectUrl)
    }
    
    return () => clearTimeout(timer)
  }, [isOpen, countdown, redirectUrl, router])

  const handleRedirectNow = () => {
    router.push(redirectUrl)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-[#252525] rounded-xl max-w-md w-full p-6 shadow-2xl shadow-[#00b4b4]/10 mx-4"
          >
            <div className="absolute -top-3 -right-3">
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center bg-[#00b4b4]/10 border border-[#00b4b4]/20 rounded-full text-[#00e6e6] hover:bg-[#00b4b4]/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <div className="absolute inset-0 bg-[#00b4b4]/10 rounded-full animate-ping"></div>
                <div className="absolute inset-2 bg-[#00b4b4]/20 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#00d8d8]"
                  >
                    <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path>
                    <path d="M4.73 4.73 4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path>
                    <line x1="2" y1="2" x2="22" y2="22"></line>
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                VPN Required for Syria
              </h3>
              <p className="text-[#d0d0d0] text-sm">
                Due to regional restrictions, you'll need a VPN connection if you're accessing from Syria.
              </p>
            </div>

            <div className="mb-6">
              <div className="h-2 bg-[#252525] rounded-full overflow-hidden mb-2">
                <motion.div
                  initial={{ width: '100%' }}
                  animate={{ width: `${(countdown / 5) * 100}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-[#00b4b4] to-[#008c8c] rounded-full"
                />
              </div>
              <p className="text-xs text-[#b0b0b0] text-center">
                Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-[#252525] hover:bg-[#333] rounded-lg transition-colors"
              >
                Stay Here
              </button>
              <button
                onClick={handleRedirectNow}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#00b4b4] to-[#008c8c] hover:from-[#00c4c4] hover:to-[#009c9c] rounded-lg transition-all flex items-center justify-center"
              >
                Proceed Anyway
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default VpnModal