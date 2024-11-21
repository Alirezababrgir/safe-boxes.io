import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Web3 from 'web3';
import { Contract_abi, Contract_address } from "../../../../../services/abis";

const ResponsiveTable = () => {
  const [lines, setLines] = useState([]);
  const [lvl1, setlvl1] = useState([]);
  const [lvl2, setlvl2] = useState([]);
  const [lvl3, setlvl3] = useState([]);
  const [lvl4, setlvl4] = useState([]);
  const [lvl5, setlvl5] = useState([]);
  const [lvl6, setlvl6] = useState([]);
  const [lvl7, setlvl7] = useState([]);
  const [lvl8, setlvl8] = useState([]);
  const [lvl9, setlvl9] = useState([]);

  useEffect(() => {
    const MlMRender = async () => {
      //CONNECTION
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3 = new Web3(window.ethereum);

      const safebox = new web3.eth.Contract(JSON.parse(Contract_abi), Contract_address);

      //MY CHILDREN SALES
      const mychildrenID = await safebox.methods.getMyChilrdenUids().call({ "from": accounts[0] });
      console.log(mychildrenID)
      setLines(mychildrenID)

      const mychildrensales = await safebox.methods.getMyChildrenSalesPerLevel(1).call({ "from": accounts[0] });
      const mychildrensale2 = await safebox.methods.getMyChildrenSalesPerLevel(2).call({ "from": accounts[0] });
      const mychildrensale3 = await safebox.methods.getMyChildrenSalesPerLevel(3).call({ "from": accounts[0] });
      const mychildrensale4 = await safebox.methods.getMyChildrenSalesPerLevel(4).call({ "from": accounts[0] });
      const mychildrensale5 = await safebox.methods.getMyChildrenSalesPerLevel(5).call({ "from": accounts[0] });
      const mychildrensale6 = await safebox.methods.getMyChildrenSalesPerLevel(6).call({ "from": accounts[0] });
      const mychildrensale7 = await safebox.methods.getMyChildrenSalesPerLevel(7).call({ "from": accounts[0] });
      const mychildrensale8 = await safebox.methods.getMyChildrenSalesPerLevel(8).call({ "from": accounts[0] });
      const mychildrensale9 = await safebox.methods.getMyChildrenSalesPerLevel(9).call({ "from": accounts[0] });

      console.log(mychildrensales)
      console.log(mychildrensale2)
      console.log(mychildrensale3)
      setlvl1(mychildrensales)
      setlvl2(mychildrensale2)
      setlvl3(mychildrensale3)
      setlvl4(mychildrensale4)
      setlvl5(mychildrensale5)
      setlvl6(mychildrensale6)
      setlvl7(mychildrensale7)
      setlvl8(mychildrensale8)
      setlvl9(mychildrensale9)

    }

    MlMRender()
  }, [])







  return (
    <div className="col-md-12 col-lg-12">
      <div style={{ borderRadius: "1rem" }} className="mb-3 card">
        <div className="card-header-tab card-header-tab-animation card-header">
          <div className="card-header-title">
            <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
            <h1 className="fs-2">MLM Volume Details</h1>
          </div>
        </div>
        <div className="card-body row">
          <Table style={{ borderRadius: "1rem" }} borderless striped bordered hover responsive>
            <thead>
              <tr scope={"col"}>
                <th style={{ borderRight: "2px solid black" }} className='col-1'>LEVEL</th>
                {lines.map((item, index) => (
                  <th key={index}>LINE {index + 1}</th>
                ))}
              </tr>

            </thead>
            <tbody>
              <tr>
                <td>Direct</td>
                {lines.map((item, index) => (
                  <td>uid :{String(item)}</td>
                ))}
              </tr>
              <tr >
                <td>LVL 1</td>
                {lvl1.map((item, index) => {
                  return (

                    <td key={index + 1}>{`volume :${Number(item._paymentSum) / 1000000}`}<br />users :{Number(item._usersCount)}</td>
                  )
                })}
              </tr>

              <tr >
                <td>LVL 2</td>
                {lvl2.map((item, index) => {
                  return (

                    <td key={index + 1}>{`volume :${Number(item._paymentSum) / 1000000}`}<br />users :{Number(item._usersCount)}</td>
                  )
                })}
              </tr>

              <tr >
                <td> LVL 3</td>
                {lvl3.map((item, index) => {
                  return (

                    <td key={index + 1}>{`volume :${Number(item._paymentSum) / 1000000}`}<br />users :{Number(item._usersCount)}</td>
                  )
                })}
              </tr>

              <tr >
                <td>LVL 4</td>
                {lvl4.map((item, index) => {
                  return (

                    <td key={index + 1}>{`volume :${Number(item._paymentSum) / 1000000}`}<br />users :{Number(item._usersCount)}</td>
                  )
                })}
              </tr>

              <tr >
                <td>LVL 5</td>
                {lvl5.map((item, index) => {
                  return (

                    <td key={index + 1}>{`volume :${Number(item._paymentSum) / 1000000}`}<br />users :{Number(item._usersCount)}</td>
                  )
                })}
              </tr>

              <tr >
                <td>LVL 6</td>
                {lvl6.map((item, index) => {
                  return (

                    <td key={index + 1}>{`volume :${Number(item._paymentSum) / 1000000}`}<br />users :{Number(item._usersCount)}</td>
                  )
                })}
              </tr>

              <tr >
                <td>LVL 7</td>
                {lvl7.map((item, index) => {
                  return (

                    <td key={index + 1}>{`volume :${Number(item._paymentSum)/ 1000000}`}<br />users :{Number(item._usersCount)}</td>
                  )
                })}
              </tr>

              <tr >
                <td>LVL 8</td>
                {lvl8.map((item, index) => {
                  return (

                    <td key={index + 1}>{`volume :${Number(item._paymentSum) / 1000000}`}<br />users :{Number(item._usersCount)}</td>
                  )
                })}
              </tr>

              <tr >
                <td>LVL 9</td>
                {lvl9.map((item, index) => {
                  return (

                    <td key={index + 1}>{`volume :${Number(item._paymentSum) / 1000000}`}<br />users :{Number(item._usersCount)}</td>
                  )
                })}
              </tr>

              <tr >
                <td>LVL 10</td>
                {lvl9.map((item, index) => {
                  return (

                    <td key={index + 1}>{`volume :${Number(item._paymentSum)/ 1000000}` }<br />users :{Number(item._usersCount)}</td>
                  )
                })}
              </tr>


            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTable;