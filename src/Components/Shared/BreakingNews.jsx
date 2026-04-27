import React from 'react';
import Marquee from 'react-fast-marquee';

const newss=[
  {
    "id": 1,
    "title": "Major Earthquake Strikes Coastal City",
    "category": "World",
    "timestamp": "2026-04-26T08:30:00Z",
    "source": "Global News Network",
    "isBreaking": true
  },
  {
    "id": 2,
    "title": "Stock Markets Plunge Amid Economic Uncertainty",
    "category": "Business",
    "timestamp": "2026-04-26T09:00:00Z",
    "source": "Finance Daily",
    "isBreaking": true
  },
  {
    "id": 3,
    "title": "Government Announces Emergency Climate Measures",
    "category": "Politics",
    "timestamp": "2026-04-26T09:15:00Z",
    "source": "National Herald",
    "isBreaking": true
  },
  {
    "id": 4,
    "title": "Breakthrough in Cancer Research Revealed",
    "category": "Health",
    "timestamp": "2026-04-26T10:00:00Z",
    "source": "Medical Journal News",
    "isBreaking": true
  },
  {
    "id": 5,
    "title": "Championship Final Ends in Dramatic Overtime Victory",
    "category": "Sports",
    "timestamp": "2026-04-26T10:30:00Z",
    "source": "Sports Live",
    "isBreaking": true
  }
]

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-3 items-center bg-gray-100 py-4  px-2 container mx-auto my-4'>
            <button className='bg-pink-500 rounded-md text-white'>Latst News</button>
            <Marquee pauseOnHover={true} speed={100} >
<div className=' flex space-x-6'>
    {
   newss.map(news=><span className='space-x-3' key={news.id}>{news.title}</span>)
}
</div>
            </Marquee>
        </div>
    );
};

export default BreakingNews;