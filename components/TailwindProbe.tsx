// components/TailwindProbe.tsx
export default function TailwindProbe() {
    return (
      <div className="border-2 border-red-500 p-4 my-8 bg-yellow-100">
        <h3 className="text-xl font-bold mb-4 text-black">Tailwind Debug Probe</h3>
        
        {/* Test basic utilities */}
        <div className="mb-4">
          <div className="px-8 py-4 bg-blue-500 text-white text-2xl rounded-full inline-block">
            Basic Test: px-8 py-4 text-2xl ✓
          </div>
        </div>
  
        {/* Test custom colors with fallback */}
        <div className="mb-4">
          <div className="px-8 py-4 text-white text-2xl rounded-full inline-block mr-4" style={{backgroundColor: '#43624F'}}>
            Inline Style: #43624F (should be odgreen)
          </div>
          <div className="px-8 py-4 bg-odgreen text-white text-2xl rounded-full inline-block mr-4">
            bg-odgreen (likely invisible)
          </div>
          <div className="px-8 py-4 bg-green-600 text-white text-2xl rounded-full inline-block">
            bg-green-600 (standard color)
          </div>
        </div>
  
        {/* Test if hex colors work directly */}
        <div className="mb-4">
          <div className="px-8 py-4 text-white text-2xl rounded-full inline-block" style={{backgroundColor: '#533117'}}>
            Inline Style: #533117 (should be tpatch)
          </div>
        </div>
  
        {/* Test with standard colors as buttons */}
        <div className="mb-4 space-x-4">
          <button className="px-8 py-4 rounded-full text-2xl font-semibold shadow-md bg-green-600 text-white">
            Standard Green Button
          </button>
          <button className="px-8 py-4 rounded-full text-2xl font-semibold shadow-md bg-amber-700 text-white">
            Standard Amber Button
          </button>
        </div>
  
        <p className="text-sm text-gray-600 mt-4">
          If custom colors (odgreen/tpatch) are invisible but standard colors work, 
          then the issue is with custom color configuration in Tailwind v4.
        </p>
      </div>
    );
  }
  