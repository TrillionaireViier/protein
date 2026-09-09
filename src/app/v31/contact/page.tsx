export default function Contact() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6 text-red-800">SIGN MY GUESTBOOK</h1>
      <form className="max-w-md mx-auto text-left bg-yellow-100 p-4 border-2 border-black">
        <div className="mb-4">
          <label className="font-bold">Name:</label><br/>
          <input type="text" className="w-full border-2 border-inset border-gray-400 bg-white p-1" />
        </div>
        <div className="mb-4">
          <label className="font-bold">Email:</label><br/>
          <input type="email" className="w-full border-2 border-inset border-gray-400 bg-white p-1" />
        </div>
        <div className="mb-4">
          <label className="font-bold">Comments:</label><br/>
          <textarea rows={4} className="w-full border-2 border-inset border-gray-400 bg-white p-1"></textarea>
        </div>
        <div className="text-center">
          <button className="bg-[#c0c0c0] border-2 border-outset border-white px-4 py-2 font-bold active:border-inset">SUBMIT FORM</button>
        </div>
      </form>
      <br/>
      <a href="mailto:webmaster@hutchings.com" className="text-blue-800 underline font-bold">Email the Webmaster</a>
    </div>
  );
}