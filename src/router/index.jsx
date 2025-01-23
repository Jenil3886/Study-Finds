import { Topics } from "../pages/Topics";
import { Home } from "../pages/Home";
import { Like } from "../pages/Like";
import { Ask } from "../pages/Ask";
import { Save } from "../pages/Saved";
import { Settings } from "../pages/Settings";
import { Profile } from "../pages/Profile";
import Item from "../pages/Item";

export const routes = [
  { path: "/", component: <Home /> },
  { path: "/topics", component: <Topics /> },
  { path: "/like", component: <Like /> },
  { path: "/saved", component: <Save /> },
  { path: "/ask", component: <Ask /> },
  { path: "/profile", component: <Profile /> },
  { path: "/settings", component: <Settings /> },
  { path: "/items/:id", component: <Item /> },
];
