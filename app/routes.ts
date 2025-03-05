import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
 
    index("routes/home/home.tsx"),
    route("profil","routes/profil/profil.tsx"),
    route("chat","routes/chat/chat.tsx"),
] satisfies RouteConfig;
