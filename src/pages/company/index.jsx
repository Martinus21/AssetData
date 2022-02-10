import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

function CompanyPage() {
  const {path} = useRouteMatch();
  const tableHead = ["View", "Company Name", "Address", "Action"];

  return (
    <div className="container-fluid p-4 px-5">
      <div className="row justify-content-between mb-3">
          <div className="col-12 col-md-7">
              <h1 className="text-primary font-36 font-weight-bold">Company</h1>
          </div>
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-end">
              <Link to={`${path}/tambahCompany`}>
                <button type="button" className="btn btn-primary"><i className="fa-solid fa-plus"></i> Add New Company</button>
              </Link>
          </div>
          <div className="col-12 col-md-1 d-flex flex-column justify-content-center align-items-end">
              <Link to={`${path}/tambahCompany`}>
                <button type="button" className="btn btn-light"><i className="fa-solid fa-filter"></i></button>
              </Link>
          </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-12">
          <div className="table-responsive">
          <table className="table">
            <thead className="bg-primary text-white">
              <tr>
                {
                  tableHead.map((head,index)=>{
                    return (
                      <th scope="col" style={{border: "none"}} className="py-3 px-4" key={index}>{head}</th>
                    )
                  })
                }
              </tr>
            </thead>
            <tbody>
              ...
            </tbody>
          </table>
          </div>
        </div>
      </div>

      <div className="row">
          <div className="col-12 col-md-3 count-table d-flex justify-content-between">
              <p className="text-primary d-flex align-items-center pr-2 mb-0">Tampilkan Data sebanyak: </p>
              <div className="dropdown pl-4">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  5
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="!#">5</a></li>
                  <li><a className="dropdown-item" href="!#">10</a></li>
                  <li><a className="dropdown-item" href="!#">20</a></li>
                </ul>
              </div>
          </div>
          <div className="col count-table d-flex justify-content-end">
              <p className="text-ci-primary d-flex align-items-center mr-2">Tampilkan Data sebanyak:</p>
          </div>
      </div>
    </div>
  )
}

export default CompanyPage