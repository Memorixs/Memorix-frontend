function Main() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block p-4 bg-blue-600 rounded-full shadow-lg mb-6">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Memorix에 오신걸 환영합니다
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          공부한 것들을 기록하는 특별한 공간입니다
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            학습 시작하기
          </button>
          <button className="px-8 py-3 bg-white font-semibold rounded-lg shadow-md hover:shadow-lg border border-gray-200 hover:border-gray-300 transition-all duration-200">
            둘러보기
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-white/20">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">체계적 기록</h3>
            <p className="text-sm text-gray-600">
              학습한 내용을 체계적으로 정리하고 관리하세요
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-white/20">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">빠른 복습</h3>
            <p className="text-sm text-gray-600">
              언제든지 빠르게 복습하고 기억을 강화하세요
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-white/20">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">진도 추적</h3>
            <p className="text-sm text-gray-600">
              학습 진도를 시각적으로 확인하고 동기부여하세요
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
