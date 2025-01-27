import React, { useEffect, useState } from "react";

const Pagingnation = () => {
  const [userInfo, setuserInfo] = useState([]);
  const [visibleUserInfo, setVisibleuserInfo] = useState([])
  const [defaultLimit, setDefaultLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)
  const [pages, setPages]  = useState(0)

  const prevPageRef = React.useRef();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((response) => {
        setuserInfo(response)
        setVisibleuserInfo(response.slice(currentPage, defaultLimit));
        let totalPagesCount = Math.ceil(response.length / defaultLimit);
        setTotalPages(totalPagesCount);
        setPages([...Array(totalPagesCount +1).keys()].slice(1))
      });
  }, []);

  const setDefaultLimitFunc = (e) => {
    console.log(e.target.value);
    setDefaultLimit(e.target.value);
    let totalPagesCount = Math.ceil(userInfo.length / e.target.value);
    setTotalPages(totalPagesCount);
    setPages([...Array(totalPagesCount +1).keys()].slice(1))
    setVisibleuserInfo(userInfo.slice(1, e.target.value));
    setCurrentPage(1);
  }

  const setCurrentPageFunc = (page) => {
    setCurrentPage(page);
    setVisibleuserInfo(userInfo.slice((page-1) * defaultLimit, defaultLimit * page));
  }

  const updateNextPage = () => {
    setCurrentPage(prevState => {
        // console.log(prevState)
        // console.log(totalPages)
        if(prevState == totalPages ){
            return prevState;
        }
        setVisibleuserInfo(userInfo.slice(((prevState + 1)-1) * defaultLimit, defaultLimit * (prevState + 1)));
        return prevState + 1;
    });
    
  }

  const updatePrevPage = () => {
    setCurrentPage(prevState => {
        if(prevState > 1) {
            setVisibleuserInfo(userInfo.slice(((prevState - 1)-1) * defaultLimit, defaultLimit * (prevState - 1)));
            return prevState - 1;
        }
        return prevState;
    });
   
  }

  return (
    <div style={{ paddingTop: "15%", paddingLeft: "5%" }}>
      {visibleUserInfo.length > 0 ? (
        <>
          <select onChange={(e) => setDefaultLimitFunc(e)}>
                <option value={5} selected={true}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
          </select>
          {visibleUserInfo.map((user) => (
            <p>{user.title}</p>
          ))}
          <h3>
          <p className={"cursor-pointer"} onClick={updatePrevPage}>Prev </p> 
          {
            pages.map((page, index) => <span  onClick={(e) => setCurrentPageFunc(page)} className={currentPage == page ? "cursor-pointer active" : "cursor-pointer"}>{page} { index == pages.length -1 ? "" : "| "} </span> ) 
          }
          <p className={"cursor-pointer"} onClick={updateNextPage}> Next</p>
          </h3>
        </>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Pagingnation;
