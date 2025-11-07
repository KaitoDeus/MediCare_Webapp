import avatarIcon from "../images/avatar-icon.png";
import patientAvatar from "../images/patient-avatar.png";
import logo from "../images/logo.png";

export const admins = [
  {
    id: "01",
    name: "Admin Alfaz",
    role: "Super Admin",
    photo: avatarIcon,
    permissions: ["manage_users", "view_reports"],
  },
  {
    id: "02",
    name: "Admin Saleh",
    role: "Content Manager",
    photo: patientAvatar,
    permissions: ["edit_content", "publish_posts"],
  },
  {
    id: "03",
    name: "Admin Farid",
    role: "System Admin",
    photo: logo,
    permissions: ["system_config", "backup_data"],
  },
];
