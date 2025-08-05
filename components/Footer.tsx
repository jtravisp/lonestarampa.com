export default function Footer() {
    return (
      <footer className="mt-20 border-t-2 border-odgreen/20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="font-bold text-odgreen mb-3">About AMPA</h3>
              <p className="text-sm text-gray-600">
                The Army Musician Proficiency Assessment (AMPA) evaluates technical skill 
                and vocational readiness for Army musicians.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-odgreen mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="/USASOM%20Regulation%20350-70-4%20(AMPA).pdf" 
                    className="text-gray-600 hover:text-odgreen transition-colors"
                  >
                    📄 Official AMPA Regulation
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.lonestarband.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-odgreen transition-colors inline-flex items-center gap-1"
                  >
                    🌐 Lone Star Band Website
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.bands.army.mil/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-odgreen transition-colors inline-flex items-center gap-1"
                  >
                    🎵 Army Bands
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact/Credit */}
            <div>
              <h3 className="font-bold text-odgreen mb-3">36th Infantry Division Band</h3>
              <p className="text-sm text-gray-600 mb-2">
                "Duty, Honor, Texas" - Texans serving Texas since 1937
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src="/arrowhead.png" 
                  alt="36th Infantry Division" 
                  className="h-12 w-auto opacity-60"
                />
                <div className="text-xs text-gray-500">
                  <p>Camp Mabry</p>
                  <p>Austin, Texas</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
            <p>© {new Date().getFullYear()} 36th Infantry Division Band. All rights reserved.</p>
            <p className="mt-1">This website is not an official U.S. Army website.</p>
          </div>
        </div>
      </footer>
    );
  }