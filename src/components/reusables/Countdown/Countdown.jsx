import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const Countdown = ({ end_in }) => {
  const ref = useRef();
  const refsec = useRef();
  const refmin = useRef();
  const refhr = useRef();
  const refday = useRef();
  const [showCountdown, setShowCountdown] = useState(false);

  function drawIn() {
    setInterval(() => {
      let time = getTimeRemaining(end_in * 1000);
      if (refsec.current.innerHTML != time.seconds) {
        refsec.current.innerHTML = time.seconds;
      }

      if (refmin.current.innerHTML != time.minutes) {
        refmin.current.innerHTML = time.minutes;
      }

      if (refhr.current.innerHTML != time.hours) {
        refhr.current.innerHTML = time.hours;
      }

      if (refday.current.innerHTML != time.days) {
        refday.current.innerHTML = time.days;
      }
    }, 1000);
  }

  function getTimeRemaining(endtime) {
    const total = endtime - Math.floor(new Date().getTime());
    const seconds = Math.floor((total / 1000) % 60).toString();
    const minutes = Math.floor((total / 1000 / 60) % 60).toString();
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24).toString();
    const days = Math.floor(total / (1000 * 60 * 60 * 24)).toString();

    return {
      seconds,
      minutes,
      hours,
      days,
    };
  }

  useEffect(() => {
    if (end_in > 0) {
      drawIn();
      setShowCountdown(true);
    }
  }, [end_in]);

  return (
    <>
      {showCountdown ? (
        <Wrap className="text-center mt-5 text-black flex justify-center">
          <span
            className={`draw_in flex items-center gap-x-3 lg:gap-x-8`}
            ref={ref}
          >
            <span>
              <span ref={refday} className="font-bold">
                0
              </span>
              <span>Days</span>
            </span>
            <span className="ml-2">
              <span ref={refhr} className="font-bold">
                0
              </span>
              <span>Hours</span>
            </span>
            <span className="ml-2">
              <span ref={refmin} className="font-bold">
                0
              </span>
              <span>Minutes</span>
            </span>
            <span className="ml-2">
              <span ref={refsec} className="font-bold">
                0
              </span>
              <span>Seconds</span>
            </span>
          </span>
        </Wrap>
      ) : (
        ""
      )}
    </>
  );
};

export default Countdown;

const Wrap = styled.div`
  margin-top: 20px;

  & .draw_in > span > span:first-of-type {
    border: 1px solid var(--color-primary);
    background-color: var(--color-primary-lite);
    padding: 6px;
    width: 60px;
    height: 50px;
    border-radius: 8px;
    color: #fff !important;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  & span {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 600px) {
    & span {
      font-size: 1rem;
    }
  }
`;
