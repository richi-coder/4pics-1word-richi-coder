import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./styles/loader.css";

function Loader() {
  const gameCondition = useSelector((state) => state.answer).gameCondition;

  return (
    <div
      style={{ display: gameCondition == "loading" ? "flex" : "none" }}
      className="loader w-screen h-screen bg-gray-900 z-50 absolute top-0 left-0 flex-col items-center justify-center"
    >
      <div className="loadingio-spinner-interwind-jdrt4catmfh">
        <div className="ldio-dc4a7au00pk">
          <div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Loader;
