import { useEffect, useState } from "react";

let intervatId = false;


const Clock = () => {
  const [seconds, setSeconds] = useState(0);

  const angle = parseInt((seconds / 60) * 360);

  const tick = () => {
    setSeconds((oldState) => {
      return oldState + 1
    });


  };
  useEffect(() => {
    if (intervatId) {

    } else {
      intervatId =
        setInterval(() => {
          tick();
        }, 1000);
    }
  }, [tick, intervatId]);


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