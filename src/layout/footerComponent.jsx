function FooterCompoent() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-gray-500">
          <p className="text-sm">© 2025 Memorix. All rights reserved.</p>
        </div>

        <div className="flex items-center space-x-3">
          <a className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">
            문의하기
          </a>
          <span className="text-gray-300">|</span>
          <a className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">
            고객센터
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterCompoent;
