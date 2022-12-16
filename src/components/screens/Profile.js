import React from 'react'

export default function Profile() {
  return (
    <div style={{maxWidth:"550px",margin:"0px auto"}}>
      <div style={{
        display:"flex",
        justifyContent:"space-around",
        margin:"18px 0px",
        borderBottom:"1px solid grey"

      }}>
         <div>
            <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
            src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg" alt=""/>
         </div>

         <div>
           <h4>Nature</h4>
            <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                <h6>40 posts</h6>
                <h6>40 followers</h6>
                <h6>40 following</h6>
                
            </div>
         </div>
      </div>

      <div className='gallery'>
         <img className='item'  src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg" alt=""/>
         <img className='item'  src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg" alt=""/>
         <img className='item'  src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg" alt=""/>
         <img className='item'  src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg" alt=""/>
         <img className='item'  src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg" alt=""/>
         <img className='item'  src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg" alt=""/>
         <img className='item'  src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg" alt=""/>


      </div>

    </div>
  )
}
