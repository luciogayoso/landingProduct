import './video.module.css';

function Video() {
  return (
    <div className='video'>
        <video className='reprodutor' style={{width:"100vw",position: "absolute",top: 0,
    left: 0,objectFit: "cover"}} autoPlay loop muted>
            <source src ='/videopeluqueria.mp4'  type = 'video/mp4' />
        </video>
    </div>
    );
}

export default Video;
