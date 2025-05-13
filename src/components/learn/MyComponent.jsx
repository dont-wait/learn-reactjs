//component = html + css + js
import './style.css'
const MyComponent = () => {
    const value = [1, 2, 3];
    // const value = {
    //     name: "abc",
    //     age: 18,
    //     address: "Hà Nội",
    // }
    return (
        <>
            <div>{console.log("Hello world")}</div>
            <div
                style={{ borderRadius: "10px", color: "blue" }
                }>dontwait update v2</div>
            <div className="child"> {JSON.stringify(value)} dontwait update v3</div>
        </>
    );
}
export default MyComponent; //lun lun export ra MyComponent mac dinh
// , import ten gi cung link toi MyComponent =))