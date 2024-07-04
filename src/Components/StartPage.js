import { Link } from 'react-router-dom';
import logoQuiz from '../Assets/letter-q.png';
import bgAbout from '../Assets/bg-about1.png'


const StartPage = () => {
    return (
        // <div className='bg-sp'>

        // <div className="container-sp">
        //     <div className='icon-title-sp'>
        //     <img src={logoQuiz} alt=''/>

        //     </div>
        //     <div className='title'>
        //         Quiz app
        //     </div>
        //     <div className="user-feature">
        //         <div className="login">
        //         <Link to='/login'>Login</Link>
        //         </div>
        //         <div className="signup">
        //         <Link to='/register'>SignUp</Link>
        //         </div>
        //     </div>
        // </div>
        // </div>
        <div className=''>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='content-about'>
                            <div className='nav-about'>
                                <div className='logo-about'>
                                <img style={{height:'35px'}} src={logoQuiz} alt=''/>
                                </div>
                                <div className='menu-nav-about'>
                                    <div className='menu-item-about'>Nav1</div>
                                    <div className='menu-item-about'>Nav2</div>
                                    <div className='menu-item-about'>Nav3</div>
                                    <div className='menu-item-about'>Nav4</div>

                                </div>
                            </div>
                            <div className='text-about'>
                                <h1 className='title-text-about'>
                                    <p className='cl1'>Tri thức</p>
                                    <p className='cl2'>Chìa khóa cho tự do tư tưởng và
                                     Sự phát triển cá nhân</p>
                                </h1>
                                <div className='content-text-about cl3'>
                                Tri thức mở ra cơ hội hiểu biết sâu rộng về thế giới. Nó kích thích sự phát triển cá nhân và tạo điều kiện cho cuộc sống tốt đẹp hơn. Bên cạnh đó, tri thức còn đóng vai trò quan trọng trong phát triển kinh tế và xã hội, góp phần vào sự tiến bộ của nhân loại.
                                </div>
                            </div>
                            <div className='log-user mt-5'>
                                <div className='signin-about'>
                                <Link to='/login'>Sign In</Link>
                                </div>
                                <div className='signup-about'>
                                
                                <Link to='/register'>Sign Up</Link>
</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 img-about'>
                    <img src={bgAbout} alt=''/>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default StartPage