import { GalleryItem } from "components/GalleryItem/GalleryItem"
import { ImageGalleryList } from "./ImageGallery.styled"

export const ImageGallery = ({images})=>{
return(
    <ImageGalleryList>
        {images.map(item => {
        return   <GalleryItem key={item.id}  image ={item}/>
        })}
   </ImageGalleryList>
)




}