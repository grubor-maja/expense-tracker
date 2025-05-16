import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import './Sidebar.css'


function Sidebar() {
    return (
        <div className="sidebar">
            <h2>EXPENSE TRACKER</h2>

            <nav>
                <ul>
                    <li>
                        <Link to ="/">
                        <MdOutlineDashboard style={{ marginRight: '10px' }} />
                        <p>Dashboard</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;