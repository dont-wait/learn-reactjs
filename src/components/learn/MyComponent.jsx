//component = html + css + js
import './style.css'
const MyComponent = () => {
    return (
        <>
            <div
                style={{ borderRadius: "10px", color: "blue" }
                }>dontwait update v2</div>
            <div className="child">dontwait update v3</div>
        </>
    );
}
export default MyComponent; //lun lun export ra MyComponent mac dinh
// , import ten gi cung link toi MyComponent =))