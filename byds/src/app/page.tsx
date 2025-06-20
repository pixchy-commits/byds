// src/app/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const router = useRouter()
  const [pulseHot, setPulseHot] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseHot(prev => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  const pulseVariants = {
    initial: { scale: 1 },
    pulse: { 
      scale: [1, 1.05, 1],
      transition: { 
        duration: 0.6,
        ease: "easeInOut" as const
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        className="relative py-24 px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div className="mb-16" variants={itemVariants}>
            <motion.h1 
              className="text-6xl md:text-7xl font-bold text-gray-900 mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100,
                delay: 0.2 
              }}
            >
              เทพลีลา
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 font-light max-w-2xl mx-auto"
              variants={itemVariants}
            >
              เกมปาร์ตี้ออนไลน์ที่คุณรอคอย เล่นง่าย สนุกทุกครั้ง
            </motion.p>
          </motion.div>

          {/* Hot Games */}
          <motion.div className="mb-20" variants={itemVariants}>
            <div className="flex items-center justify-center gap-3 mb-12">
              <h2 className="text-2xl font-semibold text-gray-800">เกมยอดนิยม</h2>
              <motion.div
                className="relative"
                animate={pulseHot ? "pulse" : "initial"}
                variants={pulseVariants}
              >
                <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                  🔥 มาแรง
                </span>
                <motion.div
                  className="absolute inset-0 bg-red-400 rounded-full -z-10"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              variants={containerVariants}
            >
              
              {/* พฤติกรรมต้องห้าม */}
              <motion.div 
                className="group relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Popular Badge */}
                <motion.div
                  className="absolute top-4 right-4 z-10"
                  initial={{ rotate: -10, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                >
                  <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold">
                    ⭐ ฮิต
                  </span>
                </motion.div>

                <div className="p-10">
                  <motion.div 
                    className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-3xl">🎭</span>
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">พฤติกรรมต้องห้าม</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    เล่นตามสถานการณ์ที่กำหนด<br/>
                    แต่ห้ามใช้คำบางคำที่ต้องห้าม
                  </p>
                  <motion.button
                    onClick={() => router.push('/create-room?mode=พฤติกรรมต้องห้าม')}
                    className="w-full bg-gray-900 text-white py-4 px-6 rounded-2xl font-medium relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-gray-800"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ type: "tween", duration: 0.3 }}
                    />
                    <span className="relative z-10">เริ่มเล่นเลย! 🚀</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* คำต้องห้าม */}
              <motion.div 
                className="group relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* New Badge */}
                <motion.div
                  className="absolute top-4 right-4 z-10"
                  initial={{ rotate: 10, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                >
                  <span className="bg-green-400 text-green-900 text-xs px-2 py-1 rounded-full font-bold">
                    ✨ ใหม่
                  </span>
                </motion.div>

                <div className="p-10">
                  <motion.div 
                    className="w-20 h-20 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-200 transition-colors"
                    whileHover={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-3xl">🤐</span>
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">คำต้องห้าม</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    เกมฮิตจากเทพลีลา<br/>
                    พูดในหัวข้อ แต่ห้ามใช้คำต้องห้าม
                  </p>
                  <motion.button
                    onClick={() => router.push('/create-room?mode=คำต้องห้าม')}
                    className="w-full bg-gray-900 text-white py-4 px-6 rounded-2xl font-medium relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-600 to-gray-800"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ type: "tween", duration: 0.3 }}
                    />
                    <span className="relative z-10">ลองเล่นดู! 💫</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Join Room */}
          <motion.div 
            className="bg-white rounded-3xl shadow-sm p-10 max-w-lg mx-auto border border-gray-100"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">เข้าร่วมห้อง</h3>
            <p className="text-gray-600 mb-6">มีรหัสห้องแล้ว? เข้าร่วมเกมได้เลย</p>
            <motion.button
              onClick={() => router.push('/join-room')}
              className="w-full bg-gray-100 text-gray-900 py-4 px-6 rounded-2xl font-medium relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="absolute inset-0 bg-gray-200"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ type: "tween", duration: 0.3 }}
              />
              <span className="relative z-10">ใส่รหัสห้อง 🔑</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Other Games */}
      <motion.section 
        className="py-20 bg-white border-t border-gray-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-16">เกมอื่นๆ ที่กำลังจะมา</h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="p-8" variants={itemVariants} whileHover={{ y: -5 }}>
              <motion.div 
                className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: [0, -10, 10, 0] }}
              >
                <span className="text-2xl">🐺</span>
              </motion.div>
              <h3 className="font-semibold text-gray-900 mb-2">หมาป่า</h3>
              <p className="text-gray-500 text-sm">เกมแปลงตัวสุดคลาสสิก</p>
              <div className="mt-2">
                <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-full">เร็วๆ นี้</span>
              </div>
            </motion.div>
            <motion.div className="p-8" variants={itemVariants} whileHover={{ y: -5 }}>
              <motion.div 
                className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: [0, 10, -10, 0] }}
              >
                <span className="text-2xl">👻</span>
              </motion.div>
              <h3 className="font-semibold text-gray-900 mb-2">พรายกระซิบ</h3>
              <p className="text-gray-500 text-sm">เกมสยองขวัญสุดระทึก</p>
              <div className="mt-2">
                <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">กำลังพัฒนา</span>
              </div>
            </motion.div>
            <motion.div className="p-8" variants={itemVariants} whileHover={{ y: -5 }}>
              <motion.div 
                className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: [0, -10, 10, 0] }}
              >
                <span className="text-2xl">🎲</span>
              </motion.div>
              <h3 className="font-semibold text-gray-900 mb-2">เกมอื่นๆ</h3>
              <p className="text-gray-500 text-sm">รอติดตามเร็วๆ นี้</p>
              <div className="mt-2">
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">มีอีกเยอะ</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
