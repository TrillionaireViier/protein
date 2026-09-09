export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Corporate Overview</h1>
      <p className="text-xl text-slate-600 mb-12">HutchingsCorp is the leading B2B provider of premium nutritional infrastructure.</p>
      
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center mb-12">
        <div className="w-full md:w-1/3">
          <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Dr. Andrew Hutchings" className="w-full rounded-full grayscale border-4 border-slate-100" />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Dr. Andrew Hutchings</h2>
          <p className="text-blue-600 font-medium mb-6">Chief Executive Officer</p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Prior to founding HutchingsCorp, Dr. Hutchings spent a decade analyzing human performance metrics in extreme environments.
          </p>
          <p className="text-slate-600 leading-relaxed">
            His data-driven approach to recovery protocols led to the development of our proprietary isolation matrix, now utilized by Fortune 500 athletic departments worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}
