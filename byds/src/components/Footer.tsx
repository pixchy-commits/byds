// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">เทพลีลา</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            แพลตฟอร์มเกมปาร์ตี้ออนไลน์ที่ให้ความสนุกและการเชื่อมต่อกับเพื่อนๆ
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">เกม</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>พฤติกรรมต้องห้าม</div>
                <div>คำต้องห้าม</div>
                <div>เกมอื่นๆ</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">การใช้งาน</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>วิธีเล่น</div>
                <div>สร้างห้อง</div>
                <div>เข้าร่วมห้อง</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">ติดต่อ</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>สนับสนุน</div>
                <div>เงื่อนไขการใช้งาน</div>
                <div>นโยบายความเป็นส่วนตัว</div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              © 2025 เทพลีลา. สงวนลิขสิทธิ์.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
