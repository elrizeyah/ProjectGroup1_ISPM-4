export default function Menu({ toggleMenu }) {
    return (
        <div 
            className="menu-icon cursor-pointer p-2 rounded hover:bg-gray-100 transition" 
            onClick={toggleMenu} 
            title="Menu"
        >
            <div className="flex flex-col justify-center items-center space-y-1">
                <span className="block w-5 h-0.5 bg-gray-700"></span>
                <span className="block w-5 h-0.5 bg-gray-700"></span>
                <span className="block w-5 h-0.5 bg-gray-700"></span>
            </div>
        </div>
    );
}
