"use client"

import '../styles/LearnMore.css'

const LearnMore = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav>
      <a href="#" onClick={handleClick} className='learn-more'>
        learn more
      </a>
    </nav>
  );
};
export default LearnMore;