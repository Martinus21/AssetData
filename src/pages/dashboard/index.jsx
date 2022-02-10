import React from 'react'
import Chart from 'react-apexcharts'

function DashboardPage() {
  const DataChart = {
    options: {
      labels: ['Test Company V1', 'Test Company V2', 'Petronas Berhad', 'New Company', 'New Companys'],
    },
    series: [44, 55, 41, 17, 15],
  }

  return (
    <div className="container-fluid p-4 px-5">

      <div className="row justify-content-between mb-3">
        <div className="col-12 col-md-7">
          <h1 className="text-primary font-36 font-weight-bold">Dashboard</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-header">
              <h2 className='text-primary text-center'>Asset by Company</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="mixed-chart">
                    <Chart options={DataChart.options} series={DataChart.series} type="donut" width="420" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-header">
              <h2 className='text-primary text-center'>Asset by Departement</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="mixed-chart">
                    <Chart options={DataChart.options} series={DataChart.series} type="donut" width="420" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage