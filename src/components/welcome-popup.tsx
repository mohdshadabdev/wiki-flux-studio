import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisit")
    const today = new Date().toDateString()
    
    if (lastVisit !== today) {
      setIsVisible(true)
      localStorage.setItem("lastVisit", today)
      
      // Auto-hide after 8 seconds
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 8000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ 
            type: "spring", 
            duration: 0.6,
            bounce: 0.3
          }}
          className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 text-center border border-gradient-to-r from-blue-200 via-purple-200 to-green-200"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </Button>
          
          {/* Wikimedia Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
            className="mb-6"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-400 via-green-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-300 via-green-300 to-blue-300 opacity-50 animate-pulse"></div>
              <svg
                viewBox="0 0 100 100"
                className="w-12 h-12 text-white relative z-10"
                fill="currentColor"
              >
                {/* Wikimedia-style globe with segments */}
                <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.9"/>
                <path d="M10 50 Q25 25 50 30 Q75 35 90 50 Q75 75 50 70 Q25 65 10 50" fill="rgba(255,255,255,0.3)"/>
                <path d="M30 20 Q50 15 70 20 Q80 40 70 60 Q50 65 30 60 Q20 40 30 20" fill="rgba(255,255,255,0.2)"/>
                <circle cx="50" cy="50" r="5" fill="white"/>
              </svg>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent mb-2 animate-pulse">
              🙏 Namaste
            </h1>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
              WikiClubTech United University
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Welcome to our vibrant community of open knowledge and collaborative innovation. 
              Join us in shaping the future of technology and learning together.
            </p>
          </motion.div>

          {/* Animated Elements */}
          <motion.div
            className="flex justify-center space-x-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-red-400 via-green-400 to-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          {/* Auto-hide timer indicator */}
          <motion.div
            className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="bg-gradient-to-r from-red-400 via-green-400 to-blue-400 h-1 rounded-full"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 8, ease: "linear" }}
            />
          </motion.div>

          <motion.p
            className="text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            This popup will disappear automatically
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}