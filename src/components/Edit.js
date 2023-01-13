import { useSelector } from "react-redux"

const Edit=(props)=>{
 const   ButtonClick=()=>{
          const btn=  useSelector(state=>state)
          console.log(btn);
    }
alert(props.id)
return(
    <div>
    </div>
)
}
export default Edit;