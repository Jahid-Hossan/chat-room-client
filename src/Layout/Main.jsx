import UserList from "../Main/UserList/UserList";
import UserMsg from "../Main/UserMsg/UserMsg";

const Main = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-4 bg-gray-400 min-h-screen">
                <UserList />
            </div>
            <div className="col-span-8 bg-slate-200">
                <UserMsg />
            </div>
        </div>
    );
};

export default Main;