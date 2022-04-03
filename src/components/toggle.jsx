const Toggle = (props) => {
    return (
        <div class="status-cell-wrap hidden-mobile"><div class="status-cell"><div class="toggle" card-id="6077297"><label class="switch"><input type="checkbox" class="success has-value manage-tbl-checkbox" checked="" card-id="6077297"></input><span class="slider round"></span></label></div><span id="status-6077297" class="chip big-chip active">{props.status}</span></div></div>
    )
}
export default Toggle