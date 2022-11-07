import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Keep.css";

const Keep = () => {
  const [input, setinput] = useState({
    Title: "",
    tododata: "",
  });
  
  // const [name, setName] = useState(() => {
  //   // getting stored value
  //   const saved = localStorage.getItem("name");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });
  const [todoitem, settodoitem] = useState([]);
  const [Id, setId] = useState(0);
  const [flag, setflag] = useState(false);
  const [currentid, setcurrentid] = useState();


  // useEffect(() => {
  //   // storing input name
  //   localStorage.setItem("name", JSON.stringify(input));
  // }, [input]);
  


  const handelInput = (e) => {
    // console.log(e.target.value)
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  const getinfo = () => {
    let data = new Date().toLocaleString();

    return data;
  };
  const onsubmit = (e) => {
    e.preventDefault();
    if (flag) {
      const newdata = todoitem.map((item) => {
        if (item.id === currentid) {
          return { ...input, Title: input.Title, tododata: input.tododata };
        }
        return item;
      });
      settodoitem(newdata);
      // console.log("currentid",currentid)
      setinput({ Title: "", tododata: "" });

      setflag(false);
    }
    if (!flag) {
      if (input.Title === "") {
        alert("please don't leave the title field empty");
      } else if (input.tododata === "") {
        alert("please don't leave the todo list field empty");
      } else {
        settodoitem([
          ...todoitem,
          {
            date: getinfo(),
            id: getId(),
            Title: input.Title,
            tododata: input.tododata,
          },
        ]);
        setinput({ Title: "", tododata: "" });
      }
    }
  };

  const getId = () => {
    setId((current) => current + 1);
    return Id;
  };
  const deledata = (_id) => {
    var newdata = todoitem.filter((item) => {
      return item.id !== _id;
    });
    settodoitem(newdata);
  };
  const updatedata = (item) => {
    console.log(item);
    setflag(true);
    setinput(item);
    setcurrentid(item.id);
  };
  console.log(todoitem);
  return (
    <>
      <Navbar />
      <div className="main_body" style={{height:"90vh"}}>
      <div className="d-flex justify-content-center mt-5" >
        <div className="card editcard ">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Title "
                  className="Title"
                  onChange={handelInput}
                  value={input.Title}
                  name="Title"
                />
              </div>
              <div>
                <textarea
                  id="w3review"
                  rows="2"
                  cols="50"
                  placeholder="enter work"
                  onChange={handelInput}
                  value={input.tododata}
                  name="tododata"
                />
              </div>
              <div className="d-flex justify-content-end">
                <div className="round" onClick={(e) => onsubmit(e)}>
                  {flag ? (
                    <i className="fa-solid fa-pen-to-square"></i>
                  ) : (
                    <i className="fa-solid fa-plus"></i>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row showcard mt-5 mb-5">
        {todoitem.map((item) => {
          return (
            <>
              <div className="col-4 mt-5" key={item.Id}>
                <div className="card ms-3 me-3">
                  <div className="card-body">
                    <h2 className="card-title mb-3">{item.Title}</h2>
                    <p className="">{item.tododata}</p>
                  </div>
                  <hr/>
                  <div class="row  ">
                    <div class="col-sm-6 col-md-8 ">
                      <b className="card-text">{item.date}</b>
                    </div>
                    <div class="col-6 col-md-4 d-flex">
                      <div
                        className="rounddata me-2 mb-2"
                        onClick={() => updatedata(item)}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </div>
                      <div
                        className="rounddata me-2 mb-2"
                        onClick={() => deledata(item.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      </div>
            <Footer/>
    </>
  );
};

export default Keep;
