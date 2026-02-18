import React from 'react';

interface Review {
    id: number;
    author: string;
    text: string;
    rating: number;
}

const Review: React.FC = () => {
    const reviews: Review[] = [
        {
            id: 1,
            author: 'Lori T.',
            text: 'Elias is professional, knowledgeable, friendly, and has a great eye for our garden\'s needs. The weekly lawn mowing is impeccable!.',
            rating: 5,
        },
        {
            id: 2,
            author: 'David N.',
            text: 'Elias has maintained our garden and landscaping for over five years and has done an exceptional job. Attention to detail has been incredible.',
            rating: 5,
        },
        {
            id: 3,
            author: 'Jeanne T.',
            text: 'We\'ve been working with Green Country for five years. They\'ve carried out all the necessary maintenance on my lawn and garden.',
            rating: 5,
        },
        {
            id: 4,
            author: 'Ericka L.',
            text: 'They\'re punctual, reliable, and take excellent care of my front and back gardens. I love that the same team is at my house every week. They\'re not a bunch of strangers.',
            rating: 5,
        },
    ];

    return (
        <section className="reviews-section py-12 px-6 bg-stone-100">
            <h2 className="text-4xl font-bold text-center mb-12 text-green-700">
                Check out our reviews on Google
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-gray-800">{review.author}</h3>
                            <div className="flex text-yellow-400">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm italic">{review.text}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8" data-aos="fade-up" data-aos-delay="400">
                <a href="https://share.google/6lv9LtzFAYN9WPwiT" className="boton crece" data-aos="zoom-in" target="_blank" rel="noopener noreferrer">
                    See all reviews on Google
                </a>
            </div>
        </section>
    );
};

export default Review;