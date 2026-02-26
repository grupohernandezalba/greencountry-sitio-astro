import React from "react";

const CallToAction: React.FC = () => {

  return (
    <section className="bg-green-900 py-16 px-6" data-aos="fade-up">
		<div className="max-w-4xl mx-auto text-center">
			
			<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
			Ready to transform your landscape?
			</h2>
			
			<p className="text-lg md:text-xl text-stone-200 mb-8">
			Bring your outdoor vision to life with expert care and over 20 years of experience. 
			Quality work, reliable service, and results you can trust.
			</p>

			<a 
			href="/quote"
			className="crece inline-block bg-white text-stone-800 font-semibold text-lg px-8 py-4 rounded-4xl shadow-lg hover:bg-gray-100 transition duration-300"
			>
			Get a free quote!
			</a>

		</div>
	</section>
  );
};

export default CallToAction;
