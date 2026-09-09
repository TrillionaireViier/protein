export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6 text-green-800 border-b-2 border-black pb-2">WHO IS DR. HUTCHINGS?</h1>
      <div className="float-left mr-4 mb-4 border-4 border-ridge border-gray-500">
        <img src="https://static.tildacdn.com/tild6233-6366-4330-b661-383465373566/CCC_enhanced_eyes.jpg" alt="Doc" className="w-48 filter grayscale contrast-150" />
      </div>
      <p className="text-lg leading-relaxed">
        <b>Dr. Andrew Hutchings</b> is a world-renowned scientist. After a terrible accident in 1994, he dedicated his life to researching the ultimate protein formula.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        <i>"I was broken. But science rebuilt me."</i> - Dr. H
      </p>
      <div className="clear-both"></div>
      <br/>
      <hr className="border-t border-black border-dashed" />
      <br/>
      <div className="text-center">
        <img src="https://web.archive.org/web/20091027055743im_/http://www.geocities.com/CollegePark/4592/undercon.gif" alt="Under construction" />
      </div>
    </div>
  );
}