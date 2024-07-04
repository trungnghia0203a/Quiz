import { Link, Outlet } from 'react-router-dom';
import logoQuiz from '../../Assets/letter-q.png';
import homeManager from '../../Assets/home.png';
import avtManager from '../../Assets/avt.png';
import iconList from '../../Assets/list.png';
import iconHw from '../../Assets/hw.png';
import iconRank from '../../Assets/rank.png';
import ListQuiz from './ListQuiz';
import ListStudent from './ListStudent';

const Teacher = () => {
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
                                    <img style={{height:'20px'}} src={homeManager}/>

                                </Link>
                            </div>
                            <div className="img-manager">
                                <Link to={'/profile'}>
                            <img style={{height:'35px'}} src={avtManager}/> 
                            <div className='name-manager'>
                                Teacher
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
                            <div className='manager-list'>
                                <div className='item-manager'>
                                    <Link to={'/teacher/listquiz'}>Danh sách câu hỏi</Link>
                            <img style={{height:'15px'}} src={iconList}/> 

                                </div>
                                <div className='item-manager'>
                                <Link to={'/teacher/liststudent'}>Danh sách học sinh</Link>
                            <img style={{height:'15px'}} src={iconList}/> 

                                </div>
                                <div className='item-manager'>
                                <Link to={'/'}>Bài tập đã giao</Link>
                                <img style={{height:'15px'}} src={iconHw}/> 

                                </div>
                                <div className='item-manager'>
                                <Link to={'/'}>Quản lý xếp hạng</Link>
                                <img style={{height:'15px'}} src={iconRank}/> 

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
export default Teacher;