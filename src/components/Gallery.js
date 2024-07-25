import {React,useState,useRef} from 'react'
import Image from './elements/Image'

const Gallery = () => {
    const ref=useRef(null);
    let imageArr=[{
        path:"./images/sports1.jpg",
        category:"sports",
        id:1
    },{
        path:"./images/sports2.jpg",
        category:"sports",
        id:2
    },{
        path:"./images/sports3.jpg",
        category:"sports",
        id:3
    },{
        path:"./images/sports4.jpg",
        category:"sports",
        id:4
    },{
        path:"./images/gradu1.jpg",
        category:"graduation",
        id:5
    },{
        path:"./images/gradu2.jpg",
        category:"graduation",
        id:6
    },{
        path:"./images/gradu3.jpg",
        category:"graduation",
        id:7
    },{
        path:"./images/gradu4.jpg",
        category:"graduation",
        id:8
    }];

    const [category,setCategory] = useState("sports");
    const [images,setImage]=useState(imageArr);

  return (
    <div className='mx-5'>
        {/* Cae=tegory Changer */}
        <div className='flex gap-3'> 
        <select ref={ref} onClick={(e)=>{
            setCategory(e.target.value);
            
        }} className='border-2 md:p-3 text-white bg-black rounded-lg p-1 font-semibold md:font-bold md:text-xl cursor-pointer '>
            <option value="sports"  defaultChecked > Sports Event</option>
            <option value="graduation" >Graduation Ceremony</option>
        </select> <button onClick={async ()=>{
            
            console.log(category);
            const filter= imageArr.filter((img)=> img.category===category);
         setImage(filter);
            console.log(images);
        }} className='font-semibold bg-yellow-200 p-1 rounded-lg md:p-3 md:text-xl md:font-bold md:hover:scale-110 transition-all'>Filter</button>
        </div><br /><br />
        <div className='flex flex-wrap gap-4'>
        {images.map((img)=>{
            return(
                <Image path={img.path} key={img.id}/>
            )
        })}
        </div>
        
    </div>
  )
}

export default Gallery