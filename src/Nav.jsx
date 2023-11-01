

import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoMdListBox } from "react-icons/io";
const Nav = () => {
  return (
    <>
      {/* <div>
        <img className="img" src={img} alt="" />
      </div> */}
      <ul>
        <li>
          <div className="first">
            <h3>Hii Reader,</h3>
            <p>Here`s your News!</p>
          </div>
        </li>
        <li>
          <div className="second">
            <h2>View Toggle</h2>
            <button type="button">
              <IoMdListBox />
            </button>
            <button type="button">
              <AiOutlineUnorderedList />
            </button>
          </div>
        </li>
        <li>
          <div className="third">
            <h3>Have a feedback</h3>
            <button type="button">We,re Listening</button>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Nav;
