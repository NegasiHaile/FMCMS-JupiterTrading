import React, { useContext, useState, useEffect } from "react";

import { GlobalState } from "../../GlobalState";

import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";

import { CCard, CCardBody } from "@coreui/react";
const brandSuccess = getStyle("success") || "#4dbd74";
const brandInfo = getStyle("info") || "#20a8d8";
const brandDanger = getStyle("danger") || "#f86c6b";
const brandWarning = getStyle("warning") || "#FFCE56";

const MainChartExample = (props) => {
  const state = useContext(GlobalState);
  const [user] = state.UserAPI.User;
  const [pickupMachines] = state.MachinePickUpAPI.machinePickups;
  const [theYear, setTheYear] = useState(new Date().getFullYear())

  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const incidentMaintenance = [];
  const informationChange = [];
  const withdrawal = [];
  const temporarlyStore = [];

  useEffect(() => {
    if (props.branchId) {
      branchData();
    } else {
      generalData();
    }
  }, [props, theYear])

  const generalData = () => {
    let elements = months.length - 1;
    for (let i = 0; i <= elements; i++) {
      incidentMaintenance.push(
        pickupMachines.filter(
          (pickup) =>
            pickup.category == "incident" &&
            new Date(pickup.createdAt).toLocaleString("en-us", {
              month: "short",
            }) == months[i] && new Date(pickup.createdAt).getFullYear() == theYear
        ).length
      );
      informationChange.push(
        pickupMachines.filter(
          (pickup) =>
            pickup.category == "information_change" &&
            new Date(pickup.createdAt).toLocaleString("en-us", {
              month: "short",
            }) == months[i] && new Date(pickup.createdAt).getFullYear() == theYear
        ).length
      );
      withdrawal.push(
        pickupMachines.filter(
          (pickup) =>
            pickup.category == "withdrawal" &&
            new Date(pickup.createdAt).toLocaleString("en-us", {
              month: "short",
            }) == months[i] && new Date(pickup.createdAt).getFullYear() == theYear
        ).length
      );
      temporarlyStore.push(
        pickupMachines.filter(
          (pickup) =>
            pickup.category == "temporarly_store" &&
            new Date(pickup.createdAt).toLocaleString("en-us", {
              month: "short",
            }) == months[i]  && new Date(pickup.createdAt).getFullYear() == theYear
        ).length
      );
    }
  };

  const branchData = () => {
    let elements = months.length - 1;
    for (let i = 0; i <= elements; i++) {
      incidentMaintenance.push(
        pickupMachines.filter(
          (pickup) =>
            pickup.category == "incident" &&
            pickup.branchId == props.branchId &&
            new Date(pickup.createdAt).toLocaleString("en-us", {
              month: "short",
            }) == months[i]  && new Date(pickup.createdAt).getFullYear() == theYear
        ).length
      );
      informationChange.push(
        pickupMachines.filter(
          (pickup) =>
            pickup.category == "information_change" &&
            pickup.branchId == props.branchId &&
            new Date(pickup.createdAt).toLocaleString("en-us", {
              month: "short",
            }) == months[i]  && new Date(pickup.createdAt).getFullYear() == theYear
        ).length
      );
      withdrawal.push(
        pickupMachines.filter(
          (pickup) =>
            pickup.category == "withdrawal" &&
            pickup.branchId == props.branchId &&
            new Date(pickup.createdAt).toLocaleString("en-us", {
              month: "short",
            }) == months[i]  && new Date(pickup.createdAt).getFullYear() == theYear
        ).length
      );
      temporarlyStore.push(
        pickupMachines.filter(
          (pickup) =>
            pickup.category == "temporarly_store" &&
            pickup.branchId == props.branchId &&
            new Date(pickup.createdAt).toLocaleString("en-us", {
              month: "short",
            }) == months[i]  && new Date(pickup.createdAt).getFullYear() == theYear
        ).length
      );
    }
  };

  const defaultDatasets = (() => {
    return [
      {
        label: "Incident Maintenance",
        backgroundColor: hexToRgba(brandDanger, 10),
        borderColor: brandDanger,
        pointHoverBackgroundColor: brandDanger,
        borderWidth: 2,
        borderDash: [8, 5],
        data: incidentMaintenance,
      },
      {
        label: "Information Change",
        backgroundColor: hexToRgba(brandInfo, 10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        data: informationChange,
      },
      {
        label: "withdrawal",
        backgroundColor: hexToRgba(brandSuccess, 10),
        borderColor: brandSuccess,
        pointHoverBackgroundColor: brandSuccess,
        borderWidth: 2,
        data: withdrawal,
      },
      {
        label: "Temporarly Store",
        backgroundColor: hexToRgba(brandWarning, 10),
        borderColor: brandWarning,
        pointHoverBackgroundColor: brandWarning,
        borderWidth: 2,
        data: temporarlyStore,
      },
    ];
  })();

  const defaultOptions = (() => {
    return {
      maintainAspectRatio: false,

      legend: {
        display: true,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
            },
            scaleLabel: {
              labelString: "Months",
              display: true,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 10,
              stepSize: Math.ceil(30 / 10),
              max: 30,
            },
            scaleLabel: {
              labelString: "Machine quantity",
              display: true,
            },
            gridLines: {
              display: true,
            },
          },
        ],
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    };
  })();

  const mystyle = {
    height: "300px",
    marginTop: "10px",
  };
  // render
  return (
    <CCard>
      <CCardBody>
      <CChartLine
      style={mystyle}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={months}
    />
      </CCardBody>
    </CCard>
  );
};

export default MainChartExample;

// backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
// hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
// CChartBar;
// CChartLine;
// CChartHorizontalBar;
// CChartDoughnut;
// CChartRadar;
// CChartPie;
// CChartPolarArea;
