import React from "react";
import {useEffect, useState} from "react";

const SwapLists = () => {
    const [list1, setList1] = useState([
            {title : "Item 1", checked : false},
            {title : "Item 2", checked : false},
            {title : "Item 3", checked : false}
    ])

    const [list2, setList2] = useState([
        {title : "Item A", checked : false},
        {title : "Item B", checked : false},
        {title : "Item C", checked : false}
    ])

    useEffect(() => {
        console.log(list1)
    }, [list1])

    const setList1SwapItem = (e, index) => {
        // console.log(e.target.value)
        setList1(prevState => prevState.map((list, Lindex) => Lindex == index ? {...list, checked : !list.checked} : list))
    }

    const swapTwoLists = () => {
        console.log(list1)
        console.log(list2)
        setList1(prevState => {
            return prevState.map((state, index) =>  {
                if(state.checked){
                    setList2(prevListState => prevListState.map((prevStt, idx) => idx == index ? {...prevStt, title : state.title, checked : false} : prevStt));
                    return {...state, title : list2[index].title, checked : false}
                }
                return state;
            })    
            
        })
    }

    return (
        <div style={{    paddingTop: "15%", paddingLeft: "5%"}}>
            <h1>List1</h1>
            <ol>
            {
                list1.map((list1Item, index) => (
                    <> 
                        
                            <li key={`list1${index}`}>
                                <input type="checkbox" checked={list1Item.checked} onChange={(e) => setList1SwapItem(e, index)}/>
                                {list1Item.title}
                            </li>
                        

                    </>
                ))
            }
            </ol>


            <h1>List2</h1>
            <ol>
            {
                list2.map((list2Item, index) => (
                    <> 
                        
                            <li key={`list2${index}`}>
                                {list2Item.title}
                            </li>

                    </>
                ))
            }
            </ol>

            <button onClick={swapTwoLists}>Swap Two Lists</button>
        </div>
    )   
}

export default SwapLists;