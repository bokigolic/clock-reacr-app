import { useState } from "react";

const Clock = () => {
  const [seconds, setSeconds] = useState(50);
  const angle = parseInt((seconds / 60) * 360);


  return (
    <div class="analog-clock">
      <div className="krug">
        <div className="pointer-holder"
          style={{
            transform: 'rotate(' + angle + 'deg)'
          }}
          >
          <div className="pointer">
          </div>
        </div>
      </div>
    </div>
  )
};

export default Clock;