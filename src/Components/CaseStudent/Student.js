import { Link, Outlet } from 'react-router-dom';
import logoQuiz from '../../Assets/letter-q.png';
import homeManager from '../../Assets/home.png';
import avtManager from '../../Assets/avt.png';
import iconClass from '../../Assets/class.png';
import iconHw from '../../Assets/hw.png';
import iconSearch from '../../Assets/search.png';

import Homework from './Homework';  // Cập nhật lại đường dẫn import cho Homework

const Student = () => {
    return (
        <div className="page-manager">
            <div className="nav-manager">
                <div className="row">
                    <div className="col-2">
                        <div className="logo-manager">
                            <img style={{height:'35px'}} src={logoQuiz} alt=''/>
                        </div>
                    </div>
                    <div className="col-10 untility-manager">
                        <div className="untility-home">
                            <Link to={'/home'}>
                                <img style={{height:'20px'}} src={homeManager} alt=''/>
                            </Link>
                        </div>
                        <div className="img-manager">
                            <Link to={'/profile'}>
                                <img style={{height:'35px'}} src={avtManager} alt=''/>
                                <div className='name-manager'>
                                    Student
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-manager">
                <div className="row">
                    <div className="col-2">
                        <div className="sidebar-manager">
                            <div className='search-sidebar'>
                                <div className='search-input'>
                                    <input 
                                      type='text'
                                    />
                                </div>
                                <div className='icon-search'>
                                <img style={{height:'35px'}} src={iconSearch} alt=''/>
                                </div>
                            </div>
                            <div className='manager-list'>
                                <div className='item-manager'>
                                    <Link to={'/student/homework'}>Bài tập</Link>
                                    <img style={{height:'15px'}} src={iconHw} alt=''/> 
                                </div>
                                <div className='item-manager'>
                                    <Link to={'/student/jclass'}>Tham gia lớp</Link>
                                    <img style={{height:'15px'}} src={iconClass} alt=''/> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="content-manager">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student;
