export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto border-[4px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white bg-[#c0c0c0] text-black p-1">
      <div className="bg-[#000080] text-white p-1 font-bold flex justify-between">
        <span>Send_Email.exe</span>
        <span>[X]</span>
      </div>
      <div className="p-6">
        <form className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="w-24 font-bold text-right">To:</label>
            <input type="text" value="webmaster@hutchings.net" readOnly className="flex-1 bg-white border-2 border-inset border-gray-400 p-1 text-gray-500" />
          </div>
          <div className="flex items-center gap-4">
            <label className="w-24 font-bold text-right">Subject:</label>
            <input type="text" className="flex-1 bg-white border-2 border-inset border-gray-400 p-1" />
          </div>
          <div className="flex gap-4">
            <label className="w-24 font-bold text-right pt-2">Message:</label>
            <textarea rows={6} className="flex-1 bg-white border-2 border-inset border-gray-400 p-1"></textarea>
          </div>
          <div className="flex justify-end pt-4">
            <button className="bg-[#c0c0c0] border-[3px] border-b-gray-800 border-r-gray-800 border-t-white border-l-white px-8 py-2 font-bold active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
