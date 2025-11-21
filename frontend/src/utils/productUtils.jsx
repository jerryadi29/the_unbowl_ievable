export const getReviews = (rating) => {
    const ratingList = [];

    // Round rating to nearest half (0.5 accuracy)
    const rounded = Math.round(rating * 2) / 2;

    const fullStars = Math.floor(rounded);
    const halfStar = rounded % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const FullStar = () => (
        <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
        </svg>
    );

    const HalfStar = () => (
        <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24">
            <defs>
                <linearGradient id="half">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="gray" />
                </linearGradient>
            </defs>
            <path fill="url(#half)" d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
    );

    const EmptyStar = () => (
        <svg className="w-5 h-5 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
    );

    // full stars
    for (let i = 0; i < fullStars; i++) {
        ratingList.push(<FullStar key={`full-${i}`} />);
    }

    // half star
    if (halfStar) {
        ratingList.push(<HalfStar key="half" />);
    }

    // empty stars
    for (let i = 0; i < emptyStars; i++) {
        ratingList.push(<EmptyStar key={`empty-${i}`} />);
    }

    return ratingList;
};
