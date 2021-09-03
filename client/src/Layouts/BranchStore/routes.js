import { lazy } from "react";

// User Account
const UserProfile = lazy(() => import("../../Components/UserAccount/Profile"));
const ChangePassword = lazy(() =>
  import("../../Components/UserAccount/ChangePassword")
);

// Jupiter branchs
const BranchDetail = lazy(() => import("../../Components/Branch/BranchDetail"));

// Dashboards
const branchDashboard = lazy(() =>
  import("../../Components/Dashboard/Dashboard")
);

// Importing of machine related routes
const MachinesList = lazy(() =>
  import("../../Components/Machine/MachinesList")
);
const MachineDtail = lazy(() =>
  import("../../Components/Machine/MachineDtail")
);
const MachineReturningLists = lazy(() =>
  import("../../Components/MachineReturn/MachineReturningLists")
);
// Client business frontend routing
const BusinessesList = lazy(() =>
  import("../../Components/Business/BusinessesList")
);
const BusinessDetail = lazy(() =>
  import("../../Components/Business/BusinessDetail")
);
// Importing MRC related routes
const MRCList = lazy(() => import("../../Components/MRC/MRCList"));
// Importing of maintenance ralted routes
const MaintenanceAnnual = lazy(() =>
  import("../../Components/Maintenance/MaintenanceAnnual")
);
// Importing of Sales ralted pages
const SalesList = lazy(() => import("../../Components/Sales/SalesList"));
const SalesDetail = lazy(() => import("../../Components/Sales/SalesDetail"));
// Others pages
const FeedbacksList = lazy(() =>
  import("../../Components/Feedback/FeedbacksList")
);
const Inventory = lazy(() => import("../../Components/Inventory/Inventory"));
const SystemBackup = lazy(() => import("../../Components/System/SystemBackup"));

const routes = [
  { path: "/", exact: true, name: "Branch-Store" },
  {
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    component: branchDashboard,
  },
  // Branchs
  {
    path: "/Branch/Detail/:id",
    exact: true,
    name: "Branch-Detail",
    component: BranchDetail,
  },
  // Machine
  {
    path: "/machines/list",
    exact: true,
    name: "Machines-List",
    component: MachinesList,
  },
  {
    path: "/machine/detail/:id",
    exact: true,
    name: "Machine-Detail",
    component: MachineDtail,
  },
  {
    path: "/machine/returnlist",
    exact: true,
    name: "Request-Return-Machine",
    component: MachineReturningLists,
  },
  // business
  {
    path: "/business/list",
    exact: true,
    name: "Business-List",
    component: BusinessesList,
  },
  {
    path: "/business/detail/:id",
    exact: true,
    name: "Register-Business",
    component: BusinessDetail,
  },
  // MRC
  {
    path: "/mrc/list",
    exact: true,
    name: "MRC-List",
    component: MRCList,
  }, // Sales
  {
    path: "/sales/list",
    exact: true,
    name: "Sales-List",
    component: SalesList,
  },
  {
    path: "/sales/detail/:id",
    exact: true,
    name: "Sales-Detail",
    component: SalesDetail,
  },
  // Maintenance
  {
    path: "/maintenance/annual",
    exact: true,
    name: "Annual-Maintenance",
    component: MaintenanceAnnual,
  },
  // Sales
  {
    path: "/sales/list",
    exact: true,
    name: "Sales-List",
    component: SalesList,
  },
  // User Accont
  {
    path: "/user/profile/:id",
    exact: true,
    name: "User-Profile",
    component: UserProfile,
  },
  {
    path: "/change_password",
    exact: true,
    name: "change_password",
    component: ChangePassword,
  },
  // others
  {
    path: "/feedbacks",
    exact: true,
    name: "Feedbacks",
    component: FeedbacksList,
  },
  {
    path: "/machine/inventory",
    exact: true,
    name: "Inventory",
    component: Inventory,
  },
  {
    path: "/system/backup",
    exact: true,
    name: "System-Backup",
    component: SystemBackup,
  },
];

export default routes;