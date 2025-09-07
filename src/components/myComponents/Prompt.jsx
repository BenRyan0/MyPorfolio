import React from 'react'

const Prompt = ({ path = "~/projects/mern-app", branch = "main" }) => {
 return (
    <span className="flex items-center gap-1">
      {/* user@host */}
      <span className="text-cyan-400 font-semibold">dev@local</span>
      <span className="text-gray-500">in</span>
      {/* path */}
      <span className="text-yellow-400">{path}</span>
      {/* git branch */}
      <span className="text-gray-500">on</span>
      <span className="text-pink-500"> {branch}</span>
      <span className="text-green-400">$</span>
    </span>
  );
}

export default Prompt