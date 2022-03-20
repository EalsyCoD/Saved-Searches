/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cl from "./AutoList.module.scss";
import img from "../../images/Vector.svg";
import deleteimg from "../../images/delete.svg";

import Notifications from "../Notifications/Notifications.js";
import AutoEdit from "../AutoEdit/AutoEdit.js";

import { deleteAuto } from "../../ducks/actions/AutoAction.js";

const Auto = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const autos = useSelector((state) => {
    return state.autos.autos;
  });
  const handleDelete = (id) => {
    dispatch(deleteAuto(id));
  };
  return (
    <>
      <div className={cl.make}>
        <div className={cl.tbody}>
          <input
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            className={cl.input}
            type="text"
            placeholder={"Car"}
          ></input>
          {autos
            .filter((make) => {
              if (searchTerm === "") {
                return make;
              } else if (
                make.make.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return make;
              }
            })
            .map((make, i) => (
              <div key={i}>
                <div className={cl.td}></div>
                <div className={cl.all}>
                  <h1 className={cl.tdname}>
                    {make.make} {make.year}
                  </h1>
                  <img className={cl.img} src={img} alt="img"></img>
                </div>
                <div className={cl.tot}>
                  <p className={cl.totallots}>256</p>
                  <p className={cl.totalchange}>256</p>
                  <Notifications />
                </div>
                <div className={cl.btns}>
                  <div className={cl.btn}>
                    <button className={cl.open} type="submit">
                      Open
                    </button>
                  </div>
                  <div className={cl.btnedit}>
                    <AutoEdit auto={make} />
                  </div>
                  <div className={cl.deleteimgD}>
                    <img
                      onClick={() => {
                        handleDelete(make.id);
                      }}
                      src={deleteimg}
                      alt="delete"
                    ></img>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Auto;
