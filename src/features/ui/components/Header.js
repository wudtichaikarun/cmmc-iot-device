import React from 'react'
import logo from 'Theme/assets/cmmc-logo.png'
import { withRouter } from 'react-router'
import { compose } from 'recompose'

const Header = ({location: { pathname }}) => (
  <div className='header-wrapper'>
      {
        (pathname==='/contents') 
        ? (
          <div className='header'>
            <img src={logo} alt="" className='logo'/>

            <div className='search'>
              <input type='text' className='search__input' placeholder='search devices name'/>
              <button className='search__button'></button>
            </div>

            <div>
              <div className="form__radio-group">
                <input type="radio" className="form__radio-input" id="small" name="size" />
                <label htmlFor="small" className="form__radio-label">
                  <span className="form__radio-btn"></span>
                  Online
                </label>
              </div>

              <div className="form__radio-group">
                <input type="radio" className="form__radio-input" id="large" name="size" />
                <label htmlFor="large" className="form__radio-label">
                  <span className="form__radio-btn"></span>
                  Offline
                </label>
              </div>
        
            </div>

            <button className='btn btn--orange' type='submit' >disconnect</button>
          </div>
       )
       : (
        <img src={logo} alt="" className='logo'/>
       )}
      
  </div>
)

export default compose(
  withRouter
)(Header)