const Toggle = (props) => {
    return (
        <div className="status-cell-wrap hidden-mobile"><div className="status-cell"><div className="toggle"><label className="switch"><input type="checkbox" className="success has-value manage-tbl-checkbox" checked="" card-id="6077297"></input><span className="slider round"></span></label></div><span className="chip big-chip active">{props.value}</span></div></div>
    )
}
export default Toggle