import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import Sidebar from '../SideBar'

const MenuPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Trigger
        </button>
      }
    >
      {close => (
        <>
          <p className="">Hello </p>
          <Sidebar />

          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            Close
          </button>
        </>
      )}
    </Popup>
  </div>
)
export default MenuPopUp
