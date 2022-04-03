const Toggle = (props) => {
    return (
        <div className="status-cell-wrap hidden-mobile"><div className="status-cell"><div className="toggle" card-id="6077297"><label className="switch"><input type="checkbox" className="success has-value manage-tbl-checkbox" checked="" card-id="6077297"></input><span className="slider round"></span></label></div><span id="status-6077297" className="chip big-chip active">{props.status}</span></div></div>
    )
}
export default Toggle