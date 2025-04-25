import { useState, useMemo } from "react";
const nums = new Array(1_00_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 99_000,
  };
});

const Example = () => {
  const [number] = useState(nums);
  const [count, setCount] = useState(0);

  const magical = useMemo(() => {
    return number.find((item) => {
      console.log(item.index);
      return item.isMagical;
    });
  }, [number]);

  return (
    <div className="Example">
      <h2>The Magical Number is {magical.index}</h2>

      <button onClick={() => setCount(count + 1)}>
        increment counter : {count}
      </button>
    </div>
  );
};

export default Example;
