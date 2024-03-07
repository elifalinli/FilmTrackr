import { Button } from "./ui/button"
import { Toggle } from "@/components/ui/toggle"

const AddToMyFilms = () => {
  const handleAddToMyFilms = (event) => {
    event.stopPropagation();
    // Add your logic for handling the "Add to My Films" action here
  };
  return (
    <Toggle variant="outline" onClick={handleAddToMyFilms}>
Add to My films
   </Toggle>
  )
}

export default AddToMyFilms
