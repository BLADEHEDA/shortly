import { Button } from "antd";
import { heroButtonStyle } from "../../styles/CustomStyles";
import './Boost.css'

const Boost = () => {
  return (
    <div className="boost-container" >
        <h2 className="boost-header">Boost your links today</h2>
        <div className="button">
        <Button type="primary" style={heroButtonStyle}>
            Get Started
          </Button>
        </div>
    </div>
  )
}   

export default Boost