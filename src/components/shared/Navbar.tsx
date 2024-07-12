import MainMenu from "../main-menu";

const Navbar = () => {
    return (
        <div className="flex h-20 w-full shrink-0 justify-end items-center px-4 md:px-6">
            <div className="w-11/12 max-w-7xl flex justify-end container mx-auto">
                <MainMenu />
            </div>
        </div>
    );
};

export default Navbar;