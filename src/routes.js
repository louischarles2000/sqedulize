import Home from "./views/Home/Home";
import Todo from "./views/TodoMode/TodoMode";
import DevMode from "./views/DevMode/DevMode";

// Icons
import home from '@material-ui/icons/Home';
import dev from '@material-ui/icons/DeveloperMode';
import todo from '@material-ui/icons/Schedule';


export const mainRoutes = [
    {
        name: 'Home',
        route: '/',
        component: Home,
        icon: home
    },
    {
        name: 'To do mode',
        route: '/to-do',
        component: Todo,
        icon: todo
    },
    {
        name: 'Dev mode',
        route: '/dev',
        component: DevMode,
        icon: dev
    }
]
