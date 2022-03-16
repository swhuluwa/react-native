import Home from '../pages/home';
import Other from '../pages/other';
import Test from '../pages/test';
import Center from '../pages/center';
import Register from '../pages/registration';

const Routes =[
    {
        name:'home',
        component:Home,
        options:{headerShown:false}
    },
    {
        name:'test',
        component:Test,
        options:{}
    },
    {
        name:'center',
        component:Center,
        options:{}
    },
    {
        name:'other',
        component:Other,
        options:{}
    },
    {
        name:'register',
        component:Register,
        options:{}
    },
]

export  default  Routes;