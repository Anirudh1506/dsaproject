import React from 'react'

const Github = () => {
  return (
    <div className='abcd'>
      <div className="flex flex-wrap justify-center gap-4">
          <div className="mb-4">
            <img
              src="https://github-readme-stats.vercel.app/api?username=Anirudh1506&theme=vue-dark&show_icons=true&hide_border=true&count_private=true"
              alt="GitHub Stats"
              className="w-95"
            />
          </div>
          <div className="mb-4">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=Anirudh1506&theme=vue-dark&hide_border=true"
              alt="GitHub Streak Stats"
              className="w-95"
            />
          </div>
        </div>
    </div>
  )
}

export default Github


