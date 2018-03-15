import React from 'react'
import { connect } from 'react-redux' 
import { withRouter } from 'react-router'
import { compose, withHandlers } from 'recompose'
import { Link } from 'react-router-dom'
import logo from 'Theme/assets/cmmc-logo.png'
import configIcon from 'Theme/assets/config.svg'
import { MQTT_Disconnect } from 'Lib'
// import FilterForm from '../../filter/components/FilterForm'
// import { CHECKED_OFFLINE, CHECKED_ONLINE } from '../../../types';
import { devicesOffline, devicesOnline } from '../actions'
import { } from '../../connection/actions'


const Header = ({
  disconnect, 
  filterAll,
  filterOfline, 
  filterOnline 
}) => (
  <div className='header-item'>
    <img className='header-item__logo logo' src={logo} alt="" />

    <div className='header-item__search search'>
      <input type='text' className='search__input' placeholder='Filter devices by name...'/>
    </div>

    <div className='header-item__radio'>
      <div className="form__radio-group">
        <input type="radio" className="form__radio-input" id="all" name="filter" value='all' onSelect={filterAll} defaultChecked/>
        <label htmlFor="all" className="form__radio-label">
          <span className="form__radio-btn form__radio-btn--all"></span>
          Show all
        </label>
      </div>

      <div className="form__radio-group">
        <input type="radio" className="form__radio-input" id="online" name="filter" value='online' onSelect={filterOnline} />
        <label htmlFor="online" className="form__radio-label">
          <span className="form__radio-btn form__radio-btn--online"></span>
          Online
        </label>
      </div>

      <div className="form__radio-group">
        <input type="radio" className="form__radio-input" id="ofline" name="filter" value='ofline' onSelect={filterOfline} />
        <label htmlFor="ofline" className="form__radio-label">
          <span className="form__radio-btn form__radio-btn--ofline"></span>
          Offline
        </label>
      </div>

    </div>
    
    <div className='header-item__setup'>
      <Link to='/connect' >
        <div className='icon icon__gear' dangerouslySetInnerHTML={{ __html: configIcon }}></div>
      </Link>

      <button className='btn btn--orange' type='submit' onClick={disconnect} >disconnect</button>
    </div>

  </div>
)

const HeaderContainer = ({ 
  onDisconnect,
  location: { pathname },
  filterAll,
  filterOfline,
  filterOnline
}) => (
  <div className='header'>
      {
        (pathname==='/contents') 
          ? <Header 
            disconnect={onDisconnect} 
            filterAll={filterAll}
            filterOfline={filterOfline}
            filterOnline={filterOnline} /> 
          : <img src={logo} alt="" className='header-item__logo logo'/>
          // (pathname==='/contents') ? <FilterForm /> : <img src={logo} alt="" className='header-item__logo logo'/>
      }
  </div>
)

export default compose(
  withRouter,
  withHandlers({
    onDisconnect: (props) => _ => {
      MQTT_Disconnect()
    }
  }),
  connect(
    null,
    (dispatch, prop) => ({
      searchByName(e) {
        dispatch()
      },
      filterAll(e) {
        dispatch(devicesOnline(e.target.checked))
      },
      filterOfline(e) {
        dispatch(devicesOffline(e.target.checked))
      },
      filterOnline(e) {
        dispatch(devicesOnline(e.target.checked))
      }
    })
  )

)(HeaderContainer)